import { QuestionAnswerPair } from '@/app/ui/components/types';
import { BASE_URL } from '@/app/lib/utils';

export async function getQuestions() {
  try {
    // Artificially delay a response for seeing a loading state

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return fetch(`${BASE_URL}/api/questions`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        return data as Array<QuestionAnswerPair>;
      });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch questions.');
  }
}
