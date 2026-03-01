'use server';
/**
 * @fileOverview An AI-powered inquiry assistant flow for a school website.
 *
 * - aiPoweredInquiryAssistant - A function that handles user inquiries.
 * - InquiryAssistantInput - The input type for the inquiry assistant function.
 * - InquiryAssistantOutput - The return type for the inquiry assistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InquiryAssistantInputSchema = z.object({
  question: z.string().describe('The user\'s question about the school.'),
});
export type InquiryAssistantInput = z.infer<typeof InquiryAssistantInputSchema>;

const InquiryAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe('A concise and accurate answer to the user\'s question.'),
});
export type InquiryAssistantOutput = z.infer<
  typeof InquiryAssistantOutputSchema
>;

export async function aiPoweredInquiryAssistant(
  input: InquiryAssistantInput
): Promise<InquiryAssistantOutput> {
  return aiPoweredInquiryAssistantFlow(input);
}

const inquiryAssistantPrompt = ai.definePrompt({
  name: 'inquiryAssistantPrompt',
  input: {schema: InquiryAssistantInputSchema},
  output: {schema: InquiryAssistantOutputSchema},
  prompt: `You are a helpful and professional AI assistant for a school website. Your role is to provide immediate, accurate, and concise answers to user questions about school policies, admission procedures, curriculum, events, or general inquiries.

User Question: {{{question}}}`,
});

const aiPoweredInquiryAssistantFlow = ai.defineFlow(
  {
    name: 'aiPoweredInquiryAssistantFlow',
    inputSchema: InquiryAssistantInputSchema,
    outputSchema: InquiryAssistantOutputSchema,
  },
  async input => {
    const {output} = await inquiryAssistantPrompt(input);
    return output!;
  }
);
