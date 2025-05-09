import { aiApiClient } from './client';
import { ANALYZE_PAGE_PROMPT } from './prompts';

export async function analyzePage(dom: string): Promise<string | undefined> {
  console.log('analyzePage', dom);
  
  const response = await aiApiClient.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: ANALYZE_PAGE_PROMPT(dom),
  });

  return response.text;
}