'use client';
import styles from '@/app/ui/components/question/question.module.css';
import { MouseEventHandler, useState } from 'react';
import { QQPairNoMeta } from '@/app/ui/components/types';
import { Button } from '@/app/ui/components/button/Button';
import { EDIT_QUESTION_BUTTON, REMOVE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import { ButtonColor, ButtonSize } from '@/app/ui/components/utils';
import { REMOVE_QUESTION } from '@/app/ui/utils/promptsTexts';
import { removeQuestionById } from '@/app/lib/actions';
import { redirect, useRouter } from 'next/navigation';

export const Question = ({ question, answer, id }: QQPairNoMeta) => {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();
  const onQuestionRemoval: MouseEventHandler<HTMLButtonElement> = () => {
    // on a real project I would implement a pretty modal for this; used a confirm for the time sake
    const shouldProceed = global.confirm(REMOVE_QUESTION);
    if (!shouldProceed) return;
    removeQuestionById(id);
  };
  const onQuestionEditClick = () => {
    router.push(`/question/${id}`);
  };
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
          <Button onClick={onQuestionEditClick} text={EDIT_QUESTION_BUTTON} size={ButtonSize.XS} />
          <Button
            onClick={onQuestionRemoval}
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
