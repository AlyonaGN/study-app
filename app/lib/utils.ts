import { z } from 'zod';
import { emptyAnswer, emptyQuestion } from '@/app/ui/utils/errorsTexts';
import { QuestionAnswerPair } from '@/app/ui/components/types';
import { v4 as uuidv4 } from 'uuid';
import { ANSWER_INPUT_NAME, QUESTION_INPUT_NAME } from '../ui/utils/formTexts';

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

export const BACKEND_ROUTES = {
  Questions: '/api/questions',
  SortedQuestions: '/api/questions/sorted',
  Question: '/api/question',
};

export const CLIENT_ROUTES = {
  Main: '/',
  Question: '/question',
};

export const TAGS = {
  Questions: 'questions',
  Question: 'question',
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

export const validateQuestionForm = (formData: FormData) => {
  const validatedFields = validationSchema.safeParse({
    question: formData.get(QUESTION_INPUT_NAME),
    answer: formData.get(ANSWER_INPUT_NAME),
  });

  return validatedFields;
};

export const buildEditedQuestionAndAnswer = (
  previousObj: QuestionAnswerPair,
  newQuestion: string,
  newAnswer: string,
): QuestionAnswerPair => {
  return {
    ...previousObj,
    question: newQuestion,
    answer: newAnswer,
  };
};
