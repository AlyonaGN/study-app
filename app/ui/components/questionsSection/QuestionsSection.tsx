import styles from '@/app/ui/components/questionsSection/questionsSection.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATED_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import React from 'react';
import { ButtonsWrapper } from './buttonsWrapper/ButtonsWrapper';
import { QuestionsList } from './questionsList/QuestionsList';
import { SortMode } from '../types';

export const QuestionsSection = ({ sort }: { sort: SortMode }) => {
  return (
    <div className={styles.container}>
      <Tooltip text={CREATED_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={CREATED_QUESTIONS_HEADING} />
      </Tooltip>
      <QuestionsList sort={sort} />
      <ButtonsWrapper />
    </div>
  );
};
