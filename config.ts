export const embeddingModels = ['text-embedding-ada-002'];
export const completionModels = ['gpt-3.5-turbo', 'text-davinci-003'];
export const namespace = 'knip';
export const suggestions = [
  'How do I install Knip?',
  'What is production mode?',
  'How can I create a new plugin?',
  'I have files like .vue and .svelte, can I include them?',
  'Can I use a different reporter?',
  'How can I exclude class and enum members from the report?',
];

export const system = `You are an enthusiastic assistant and eager to help out!
Answer the question faithfully using the provided context.
Use Markdown.
Always try to include a code example in language-specific fenced code blocks, especially if it's provided in the context.
If the answer is not provided in the context, say "Sorry, I don\'t have that information.".`;

export const prompt = `Context: {CONTEXT}

Question: {QUERY}

Answer:`;
