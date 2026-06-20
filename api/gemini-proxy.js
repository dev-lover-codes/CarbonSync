export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization;
  const clientApiKey = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
  const apiKey = clientApiKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Support client-specified model, default to gemini-1.5-flash
    const { prompt, model: clientModel } = req.body;
    const modelName = clientModel || 'gemini-1.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid prompt' });
    }
    if (prompt.length > 2000) {
      return res.status(400).json({ error: 'Prompt too long' });
    }

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini proxy error:', error);
    return res.status(500).json({ error: 'Generation failed', details: error.message });
  }
}
