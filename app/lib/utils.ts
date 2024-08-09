import { z } from 'zod';
import { emptyAnswer, emptyQuestion } from '@/app/ui/utils/errorsTexts';
import { QuestionAnswerPair } from '@/app/ui/components/types';
import { v4 as uuidv4 } from 'uuid';

interface QuestionAndAnswerBuilderProps {
  question: string;
  answer: string;
}

export const buildQuestionandAnswerObject = (
  questionAndAnswer: QuestionAndAnswerBuilderProps,
): QuestionAnswerPair => {
  return {
    ...questionAndAnswer,
    id: uuidv4(),
    date: Date.now(),
  };
};

export const BASE_URL = 'http://localhost:3001';

export const TAGS = {
  Questions: 'questions',
};

export const validationSchema = z.object({
  question: z
    .string({
      invalid_type_error: emptyQuestion,
    })
    .min(1),
  answer: z
    .string({
      invalid_type_error: emptyAnswer,
    })
    .min(1),
});
