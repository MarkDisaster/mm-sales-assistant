import { GoogleGenAI } from '@google/genai';

export const aiApiClient = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_GEMINI_KEY,
});