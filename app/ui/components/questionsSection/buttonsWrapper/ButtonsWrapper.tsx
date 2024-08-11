'use client';
import { Button } from '@/app/ui/components/button/Button';
import {
  REMOVE_QUESTIONS_BUTTON,
  SORT_QUESTIONS_ALPHABET_BUTTON,
  SORT_QUESTIONS_DATE_BUTTON,
} from '@/app/ui/utils/buttonTexts';
import { ButtonColor } from '@/app/ui/components/utils';
import { REMOVE_ALL_QUESTIONS } from '@/app/ui/utils/promptsTexts';
import { MouseEventHandler, useState } from 'react';
import styles from '@/app/ui/components/questionsSection/buttonsWrapper/buttonsWrapper.module.css';
import { removeAllQuestions } from '@/app/lib/actions';
import { SortMode } from '../../types';
import { useRouter } from 'next/navigation';

export const ButtonsWrapper = () => {
  const [sortType, setSortType] = useState<SortMode>(SortMode.ByDate);
  const router = useRouter();
  const onQuestionsRemoval: MouseEventHandler<HTMLButtonElement> = () => {
    // on a real project I would implement a pretty modal for this; used a confirm for the time sake
    const shouldProceed = global.confirm(REMOVE_ALL_QUESTIONS);
    if (!shouldProceed) return;
    removeAllQuestions();
  };

  const onSortClick = () => {
    if (sortType === SortMode.Alpabetically) {
      setSortType(SortMode.ByDate);
      router.push(`${SortMode.ByDate}`);
    } else if (sortType === SortMode.ByDate) {
      setSortType(SortMode.Alpabetically);
      router.push(`${SortMode.Alpabetically}`);
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button
        onClick={onSortClick}
        text={
          sortType === SortMode.Alpabetically
            ? SORT_QUESTIONS_DATE_BUTTON
            : SORT_QUESTIONS_ALPHABET_BUTTON
        }
      />
      <Button
        onClick={onQuestionsRemoval}
        text={REMOVE_QUESTIONS_BUTTON}
        buttonColor={ButtonColor.Red}
      />
    </div>
  );
};
