'use client';
import { Button } from '@/app/ui/components/button/Button';
import { REMOVE_QUESTIONS_BUTTON, SORT_QUESTIONS_BUTTON } from '@/app/ui/utils/buttonTexts';
import { ButtonColor } from '@/app/ui/components/utils';
import { REMOVE_ALL_QUESTIONS } from '@/app/ui/utils/promptsTexts';
import { MouseEventHandler } from 'react';
import styles from '@/app/ui/components/questionsSection/buttonsWrapper/buttonsWrapper.module.css';
import { removeAllQuestions } from '@/app/lib/actions';

export const ButtonsWrapper = () => {
  const onQuestionsRemoval: MouseEventHandler<HTMLButtonElement> = () => {
    // on a real project I would implement a pretty modal for this; used a confirm for the time sake
    const shouldProceed = global.confirm(REMOVE_ALL_QUESTIONS);
    if (!shouldProceed) return;
    removeAllQuestions();
  };
  return (
    <div className={styles.buttonsContainer}>
      <Button text={SORT_QUESTIONS_BUTTON} />
      <Button
        onClick={onQuestionsRemoval}
        text={REMOVE_QUESTIONS_BUTTON}
        buttonColor={ButtonColor.Red}
      />
    </div>
  );
};
