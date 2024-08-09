'use client';
import styles from '@/app/ui/components/question/question.module.css';
import { useState } from 'react';
import { QQPairNoMeta } from '@/app/ui/components/types';
import { Button } from '@/app/ui/components/button/Button';
import { EDIT_QUESTION_BUTTON, REMOVE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import { ButtonColor, ButtonSize } from '../utils';

export const Question = ({ question, answer }: QQPairNoMeta) => {
  const [isShown, setIsShown] = useState(false);
  const onQuestionClick = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      <div className={styles.questionAndButtons}>
        <p onClick={onQuestionClick} className={styles.question}>
          {question}
        </p>
        <div className={styles.buttons}>
          <Button text={EDIT_QUESTION_BUTTON} size={ButtonSize.XS} />
          <Button
            text={REMOVE_QUESTION_BUTTON}
            buttonColor={ButtonColor.Red}
            size={ButtonSize.XS}
          />
        </div>
      </div>

      {isShown ? <p className={styles.answer}>{answer}</p> : null}
    </div>
  );
};
