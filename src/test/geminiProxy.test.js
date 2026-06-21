import { describe, it, expect, vi } from 'vitest';
import handler from '../../api/gemini-proxy';

// Mock the Gemini SDK
vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn().mockImplementation(() => {
      return {
        getGenerativeModel: vi.fn().mockImplementation(() => {
          return {
            generateContent: vi.fn().mockImplementation((prompt) => {
              if (prompt === 'throw-error') {
                throw new Error('mock failure');
              }
              return Promise.resolve({
                response: {
                  text: () => 'mocked response text'
                }
              });
            })
          };
        })
      };
    })
  };
});

function mockReqRes(method, body, headers = {}) {
  const req = {
    method,
    body,
    headers: {
      authorization: 'Bearer mock-key',
      ...headers
    }
  };
  const res = {
    statusCode: 0,
    body: null,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    end() {
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
  return { req, res };
}

describe('gemini-proxy handler', () => {
  it('rejects non-POST methods with 405', async () => {
    const { req, res } = mockReqRes('GET', {});
    await handler(req, res);
    expect(res.statusCode).toBe(405);
    expect(res.body.error).toBe('Method not allowed');
  });

  it('rejects missing prompt with 400', async () => {
    const { req, res } = mockReqRes('POST', {});
    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Missing or invalid prompt');
  });

  it('rejects too long prompt with 400', async () => {
    const longPrompt = 'a'.repeat(2001);
    const { req, res } = mockReqRes('POST', { prompt: longPrompt });
    await handler(req, res);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Prompt too long');
  });

  it('rejects missing API key with 500', async () => {
    const originalEnv = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;
    const { req, res } = mockReqRes('POST', { prompt: 'hello' }, { authorization: '' });
    await handler(req, res);
    expect(res.statusCode).toBe(500);
    expect(res.body.error).toBe('Gemini API key not configured');
    process.env.GEMINI_API_KEY = originalEnv;
  });

  it('returns 200 and generated text on success', async () => {
    const { req, res } = mockReqRes('POST', { prompt: 'hello' });
    await handler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.body.text).toBe('mocked response text');
  });

  it('returns 500 when generation fails', async () => {
    const { req, res } = mockReqRes('POST', { prompt: 'throw-error' });
    await handler(req, res);
    expect(res.statusCode).toBe(500);
    expect(res.body.error).toBe('Generation failed');
    expect(res.body.details).toBe('mock failure');
  });

  it('sets restricted CORS origin header on every response', async () => {
    const { req, res } = mockReqRes('POST', { prompt: 'hello' });
    await handler(req, res);
    expect(res.headers['Access-Control-Allow-Origin']).toBe(
      'https://carbonsync-site.vercel.app'
    );
  });
});
