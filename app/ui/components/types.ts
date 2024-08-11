import { HTMLInputTypeAttribute } from 'react';

export interface Input {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  defaultValue?: string | number;
}

export interface QuestionAnswerPair {
  question: string;
  answer: string;
  id: string;
  date: number;
}

export type QQPairNoMeta = Omit<QuestionAnswerPair, 'date'>;

export interface FormState {
  message: string;
}

export const enum SortMode {
  Alpabetically = 'Alpabetically',
  ByDate = 'ByDate',
}

export interface SortProps {
  sort: SortMode;
}
