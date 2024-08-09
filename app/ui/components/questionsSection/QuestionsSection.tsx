import styles from '@/app/ui/components/questionsSection/questionsSection.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { QuestionsAndAnswersList } from '@/app/ui/components/questionsList/QuestionsList';
import { Button, ButtonColor } from '@/app/ui/components/button/Button';
import { REMOVE_QUESTIONS_BUTTON, SORT_QUESTIONS_BUTTON } from '@/app/ui/utils/buttonTexts';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATED_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';

export const QuestionsSection = () => {
  return (
    <div className={styles.container}>
      <Tooltip text={CREATED_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={CREATED_QUESTIONS_HEADING} />
      </Tooltip>
      <QuestionsAndAnswersList />
      <div className={styles.buttonsContainer}>
        <Button text={SORT_QUESTIONS_BUTTON} />
        <Button text={REMOVE_QUESTIONS_BUTTON} buttonColor={ButtonColor.Red} />
      </div>
    </div>
  );
};
