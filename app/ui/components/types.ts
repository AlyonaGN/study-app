import { HTMLInputTypeAttribute } from 'react';

export interface Input {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export interface QuestionAnswerPair {
  question: string;
  answer: string;
  id: string;
  date: number;
  userId: string;
}

export type QQPairNoMeta = Omit<QuestionAnswerPair, 'date' | 'userId'>;
