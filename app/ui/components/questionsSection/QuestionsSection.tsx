import styles from '@/app/ui/components/questionsSection/questionsSection.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { QuestionsAndAnswersList } from '@/app/ui/components/questionsSection/questionsList/QuestionsList';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { CREATED_QUESTIONS_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import { ButtonsWrapper } from '@/app/ui/components/questionsSection/buttonsWrapper/ButtonsWrapper';

export const QuestionsSection = () => {
  return (
    <div className={styles.container}>
      <Tooltip text={CREATED_QUESTIONS_TOOLTIP}>
        <Heading level={HeadingLevel.Two} title={CREATED_QUESTIONS_HEADING} />
      </Tooltip>
      <QuestionsAndAnswersList />
      <ButtonsWrapper />
    </div>
  );
};
