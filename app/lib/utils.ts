import { QuestionAnswerPair } from '@/app/ui/components/types';
import { v4 as uuidv4 } from 'uuid';

interface QuestionAndAnswerBuilderProps {
  question: string;
  answer: string;
  userId: string;
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
