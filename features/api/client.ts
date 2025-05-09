import { GoogleGenAI } from '@google/genai';
console.log("client", import.meta.env.VITE_API_GEMINI_KEY);

export const aiApiClient = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_GEMINI_KEY,
});