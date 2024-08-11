import { QuestionAnswerPair, SortMode } from '@/app/ui/components/types';
import { BASE_URL, BACKEND_ROUTES, TAGS, CLIENT_ROUTES } from '@/app/lib/utils';
import { redirect } from 'next/navigation';

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

  async getQuestions({ sortType }: { sortType: SortMode }): Promise<QuestionAnswerPair[]> {
    'use server';
    const sorted = sortType === SortMode.Alpabetically ? true : false;

    try {
      const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}?sorted=${sorted}`, {
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

  async getQuestionById(questionId: string): Promise<QuestionAnswerPair> {
    const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}/${questionId}`, {
      method: 'GET',
      headers: this.headers,
      next: { tags: [`${TAGS.Question}:${questionId}`] },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch question with ID ${questionId}`);
    }
    return response.json();
  }

  async createQuestion(question: QuestionAnswerPair): Promise<QuestionAnswerPair> {
    'use server';
    try {
      const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}`, {
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
    'use server';
    const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete all questions');
    }
  }

  async deleteQuestionById(questionId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}/${questionId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete question with ID ${questionId}`);
    }
  }

  async updateQuestion(
    questionId: string,
    updatedQuestion: QuestionAnswerPair,
  ): Promise<QuestionAnswerPair> {
    const response = await fetch(`${this.baseUrl}${BACKEND_ROUTES.Questions}/${questionId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(updatedQuestion),
    });
    if (!response.ok) {
      throw new Error(`Failed to update question with ID ${questionId}`);
    }
    return response.json();
  }
}

export const apiClient = new ApiClient(BASE_URL, {
  Authorization: 'Bearer your-token-here',
});
