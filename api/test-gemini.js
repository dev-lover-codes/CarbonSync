export default async function handler(req, res) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'No API key' });
  }

  const models = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-2.0-flash',
    'gemini-2.5-flash',
    'gemini-3.5-flash',
    'gemini-pro'
  ];

  const results = {};

  for (const model of models) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hello' }] }]
        })
      });
      const data = await response.json();
      results[model] = {
        status: response.status,
        hasText: !!(data.candidates?.[0]?.content?.parts?.[0]?.text),
        response: data
      };
    } catch (e) {
      results[model] = { error: e.message };
    }
  }

  return res.status(200).json(results);
}
