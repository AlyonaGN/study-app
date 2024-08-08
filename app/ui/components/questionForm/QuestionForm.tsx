import { Form } from '@/app/ui/components/form/Form';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { NEW_QUESTION_FORM_HEADING } from '@/app/ui/utils/headingsTexts';
import styles from '@/app/ui/components/questionForm/questionForm.module.css';
import { NEW_QUESTION_FORM_INPUTS } from '@/app/ui/utils/formTexts';

export const QuestionForm = () => {
  return (
    <div className={styles.container}>
      <Heading level={HeadingLevel.Two} title={NEW_QUESTION_FORM_HEADING} />
      <Form inputs={NEW_QUESTION_FORM_INPUTS} submitHandler={() => null} />
    </div>
  );
};
