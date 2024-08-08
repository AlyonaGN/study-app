'use client';
import styles from '@/app/ui/components/question/question.module.css';
import { useState } from 'react';
import { QuestionAnswerPair } from '@/app/ui/components/types';

export const Question = ({ question, answer }: QuestionAnswerPair) => {
  const [isShown, setIsShown] = useState(false);
  const onQuestionClick = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      <p onClick={onQuestionClick} className={styles.question}>
        {question}
      </p>
      {isShown ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  );
};
