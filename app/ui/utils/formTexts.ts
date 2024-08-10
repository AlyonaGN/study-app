import { Input } from '@/app/ui/components/types';

export const QUESTION_INPUT_NAME = 'Question';
export const ANSWER_INPUT_NAME = 'Answer';

export const NEW_QUESTION_FORM_INPUTS: Array<Input> = [
  { name: QUESTION_INPUT_NAME, placeholder: 'You can enter your new question here', type: 'text' },
  { name: ANSWER_INPUT_NAME, placeholder: 'And you can enter the answer here :)', type: 'text' },
];

export const EDIT_QUESTION_FORM_INPUTS: Array<Input> = [
  { name: QUESTION_INPUT_NAME, placeholder: 'You can edit your new question here', type: 'text' },
  { name: ANSWER_INPUT_NAME, placeholder: 'And you can edit the answer here :)', type: 'text' },
];
