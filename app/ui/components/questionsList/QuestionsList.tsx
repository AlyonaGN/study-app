import styles from '@/app/ui/components/questionsList/questionsList.module.css';
import { QuestionAnswerPair } from '@/app/ui/components/types';
import { Question } from '@/app/ui/components/question/Question';

interface QuestionsAndAnswersListProps {
  questionAnswerPairs: Array<QuestionAnswerPair>;
}

export const QuestionsAndAnswersList = ({ questionAnswerPairs }: QuestionsAndAnswersListProps) => {
  return (
    <div className={styles.container}>
      {questionAnswerPairs.map((questionAnswerPair) => {
        const { id, question, answer } = questionAnswerPair;
        return <Question key={id} question={question} answer={answer} id={id} />;
      })}
    </div>
  );
};
