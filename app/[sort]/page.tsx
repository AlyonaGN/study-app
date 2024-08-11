import { QuestionsList } from '../ui/components/questionsSection/questionsList/QuestionsList';
import { SortMode, SortProps } from '../ui/components/types';
import styles from '@/app/ui/components/questionsSection/questionsSection.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATED_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import React from 'react';
import { ButtonsWrapper } from '../ui/components/questionsSection/buttonsWrapper/ButtonsWrapper';

export const SortedHome = ({ params }: { params: SortProps }) => {
  return (
    <div className={styles.container}>
      <Tooltip text={CREATED_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={CREATED_QUESTIONS_HEADING} />
      </Tooltip>
      <QuestionsList sort={params.sort ? params.sort : SortMode.ByDate} />
      <ButtonsWrapper />
    </div>
  );
};

export default SortedHome;
