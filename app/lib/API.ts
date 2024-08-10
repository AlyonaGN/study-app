import { QuestionAnswerPair } from '@/app/ui/components/types';
import { BASE_URL, TAGS } from '@/app/lib/utils';

export class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl: string, headers: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
    this.headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  async getQuestions(): Promise<QuestionAnswerPair[]> {
    'use server';
    try {
      const response = await fetch(`${this.baseUrl}/api/questions`, {
        method: 'GET',
        headers: this.headers,
        next: { tags: [TAGS.Questions] },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      return data as QuestionAnswerPair[];
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  }

  async createQuestion(question: QuestionAnswerPair): Promise<QuestionAnswerPair> {
    'use server';
    try {
      const response = await fetch(`${this.baseUrl}/api/questions`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(question),
      });
      if (!response.ok) {
        throw new Error('Failed to create question');
      }
      const data = await response.json();
      return data.question as QuestionAnswerPair;
    } catch (error) {
      console.error('Error creating question:', error);
      throw error;
    }
  }

  async deleteAllQuestions(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/api/questions`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      console.log('response', response);
      throw new Error('Failed to delete all questions');
    }
  }

  async deleteQuestionById(questionId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/api/questions/${questionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete question with ID ${questionId}`);
    }
  }
}

export const apiClient = new ApiClient(BASE_URL, {
  Authorization: 'Bearer your-token-here',
});
