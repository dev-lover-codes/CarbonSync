import { GoogleGenerativeAI } from "@google/generative-ai";

const getApiKey = () => {
  return import.meta.env.VITE_GEMINI_API_KEY || "";
};

const initGemini = () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not defined. Gemini features will use mock/fallback data.");
    return null;
  }
  return new GoogleGenerativeAI(apiKey);
};

const genAI = initGemini();

function cleanAndParseJSON(text) {
  try {
    let clean = text.trim();
    if (clean.startsWith('```')) {
      clean = clean.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }
    return JSON.parse(clean.trim());
  } catch (e) {
    console.error("Failed to parse Gemini response as JSON:", text, e);
    throw e;
  }
}

export async function getDailyTip(userProfile, todayActivities) {
  try {
    if (!genAI) throw new Error("GenAI not initialized");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are EcoBot, a friendly and encouraging carbon footprint coach for Indian users. 
The user's profile: ${JSON.stringify(userProfile || {})}. 
Today's logged activities: ${JSON.stringify(todayActivities || [])}. 

Give ONE specific, actionable tip to reduce their carbon footprint today. Keep it under 2 sentences. Be warm, specific, and mention estimated CO₂ savings if possible.

Return ONLY a valid JSON object with the following fields:
{
  "tip": "the tip text",
  "impactKg": 1.5,
  "category": "transport" (must be one of: transport, food, energy, shopping, waste)
}
Do not return any other text, markdown blocks, or explanation.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return cleanAndParseJSON(text);
  } catch (error) {
    console.error("Error in getDailyTip:", error);
    // Fallback response
    return {
      tip: "Unplug standby home electronics like TVs and chargers when not in use. It can save up to 1.2kg of CO2 today.",
      impactKg: 1.2,
      category: "energy"
    };
  }
}

export async function getWeeklyInsight(weekData, prevWeekData) {
  try {
    if (!genAI) throw new Error("GenAI not initialized");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are EcoBot. Analyze this week vs last week carbon data for an Indian user.
This week: ${JSON.stringify(weekData || [])}.
Last week: ${JSON.stringify(prevWeekData || [])}.

Write a 2-3 sentence personalized insight. Mention specific numbers. Identify what improved and one concrete focus area. Be encouraging.

Return ONLY a valid JSON object:
{
  "insight": "Your weekly insight text here.",
  "trend": "improving", (one of: improving, steady, increasing)
  "highlight": "Highlight metric or key achievement"
}
Do not return any other text.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return cleanAndParseJSON(text);
  } catch (error) {
    console.error("Error in getWeeklyInsight:", error);
    return {
      insight: "Great job keeping your food-related emissions low this week! Your transport emissions increased slightly due to commute distance. Consider carpooling or using public transit next week.",
      trend: "steady",
      highlight: "Food emissions decreased by 15%"
    };
  }
}

export async function getChatResponse(userMessage, userStats, chatHistory) {
  try {
    if (!genAI) throw new Error("GenAI not initialized");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Format chat history for Gemini
    const historyText = (chatHistory || [])
      .map(m => `${m.role === 'user' ? 'User' : 'EcoBot'}: ${m.content}`)
      .join('\n');

    const prompt = `You are EcoBot, a helpful, friendly carbon footprint assistant. 
User context — monthly CO₂: ${(userStats?.monthlyCO2 || 0).toFixed(1)}kg, streak: ${userStats?.streak || 0} days, level: ${userStats?.level || 'Seedling'}, country: India. 

Answer questions about carbon footprint, sustainability, and climate. Reference their personal data when relevant. Keep answers concise (under 4 sentences) unless they ask for detail. Be warm and encouraging.

Here is the conversation history:
${historyText}

User's new message: ${userMessage}

Response:`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error in getChatResponse:", error);
    return "I am currently running in offline/local helper mode, but I'm here to support your green journey! Reducing transport emissions by walking and switching off appliances are great first steps to save CO2.";
  }
}

export async function getFootprintScore(monthlyData) {
  try {
    if (!genAI) throw new Error("GenAI not initialized");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Score this monthly carbon footprint data from 0-100 where 100 = zero carbon and 50 = Indian national average (1800 kg/year or 150 kg/month). 
Data: ${JSON.stringify(monthlyData || [])}.

Return ONLY valid JSON: 
{ 
  "score": 75, 
  "grade": "B", 
  "summary": "One sentence summary comparing to average.", 
  "topTip": "One specific actionable tip." 
}
Do not include any explanation or extra text outside the JSON.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return cleanAndParseJSON(text);
  } catch (error) {
    console.error("Error in getFootprintScore:", error);
    return {
      score: 65,
      grade: "B",
      summary: "Your carbon footprint is roughly 15% lower than the national Indian average.",
      topTip: "Consolidate grocery trips and switch to vegetarian meals twice a week to improve your score further."
    };
  }
}
