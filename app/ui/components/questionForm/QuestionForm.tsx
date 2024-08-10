'use client';
import { Form } from '@/app/ui/components/form/Form';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { NEW_QUESTION_FORM_HEADING } from '@/app/ui/utils/headingsTexts';
import styles from '@/app/ui/components/questionForm/questionForm.module.css';
import { NEW_QUESTION_FORM_INPUTS } from '@/app/ui/utils/formTexts';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATE_NEW_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import { LATENCY_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import { CREATE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import createQuestion from '@/app/lib/actions';
import { useState } from 'react';

export const QuestionForm = () => {
  const [isLatencyAdded, setIsLatencyAdded] = useState(false);
  const onToggleLatency = () => {
    setIsLatencyAdded((prevState) => !prevState);
  };

  const createQuestionWithArgs = createQuestion.bind(null, isLatencyAdded);

  return (
    <div className={styles.container}>
      <Tooltip text={CREATE_NEW_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={NEW_QUESTION_FORM_HEADING} />{' '}
      </Tooltip>

      <Form
        inputs={NEW_QUESTION_FORM_INPUTS}
        buttonText={CREATE_QUESTION_BUTTON}
        submitAction={createQuestionWithArgs}
      />

      <Tooltip text={LATENCY_TOOLTIP}>
        <input
          checked={isLatencyAdded}
          className={styles.checkbox}
          type="checkbox"
          onChange={onToggleLatency}
        />
      </Tooltip>
    </div>
  );
};
