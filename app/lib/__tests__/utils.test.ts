import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import { buildQuestionandAnswerObject } from '../utils';

describe('buildQuestionandAnswerObject', () => {
  it('builds a valid question ', () => {
    const testInputValues = {
      question: 'question',
      answer: 'answer',
    };
    const newQuestion = buildQuestionandAnswerObject({
      question: testInputValues.question,
      answer: testInputValues.answer,
    });

    expect(newQuestion.question).toBe(testInputValues.question);
    expect(newQuestion.answer).toBe(testInputValues.answer);
  });
});
