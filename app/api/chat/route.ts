import { NextRequest } from 'next/server';
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: openai('gpt-4o'),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}