'use client';
import styles from '@/app/ui/components/question/question.module.css';
import { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: QuestionProps) => {
  const [isShown, setIsShown] = useState(false);
  const onQuestionClick = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <div>
      <p onClick={onQuestionClick} className={styles.question}>
        {question}
      </p>
      {isShown ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  );
};
