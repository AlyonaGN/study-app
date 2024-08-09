import { Form } from '@/app/ui/components/form/Form';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { NEW_QUESTION_FORM_HEADING } from '@/app/ui/utils/headingsTexts';
import styles from '@/app/ui/components/questionForm/questionForm.module.css';
import { NEW_QUESTION_FORM_INPUTS } from '@/app/ui/utils/formTexts';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATE_NEW_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import createQuestion from '@/app/lib/actions';

export const QuestionForm = () => {
  return (
    <div className={styles.container}>
      <Tooltip text={CREATE_NEW_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={NEW_QUESTION_FORM_HEADING} />{' '}
      </Tooltip>

      <Form inputs={NEW_QUESTION_FORM_INPUTS} />
    </div>
  );
};
