import { buildQuestionandAnswerObject } from '@/app/lib/utils';

export const MOCK_DB_QUESTIONS = [
  buildQuestionandAnswerObject({
    question: 'Did Alena meet the requirements?',
    answer: 'Yes, she did!',
    userId: '1',
  }),
];
