import { MOCK_DB_QUESTIONS } from '@/app/lib/mockDB';

export async function getQuestions() {
  try {
    // Artificially delay a response for seeing a loading state

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // here is how this would look like if I were to get the questions from a DB
    /*  const res = await fetch('https://base-url/endpoint', { next: { tags: ['questions'] } })
        const data = await res.json() */

    return MOCK_DB_QUESTIONS;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch questions.');
  }
}
