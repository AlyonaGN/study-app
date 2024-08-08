import styles from '@/app/ui/components/emptyQuestions/emptyQuestions.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { NO_QUESTIONS_HEADING, NO_QUESTIONS_SUBHEADING } from '@/app/ui/utils/headingsTexts';

export const EmptyQuestions = () => {
  return (
    <div className={styles.container}>
      <Heading level={HeadingLevel.Two} title={NO_QUESTIONS_HEADING} />
      <Heading level={HeadingLevel.Four} title={NO_QUESTIONS_SUBHEADING} />
    </div>
  );
};
