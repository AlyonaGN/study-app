import { QuestionAnswerPair } from '@/app/ui/components/types';
import { BASE_URL, TAGS } from '@/app/lib/utils';

export async function getAllQuestions() {
  try {
    return fetch(`${BASE_URL}/questions`, { next: { tags: [TAGS.Questions] } })
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
