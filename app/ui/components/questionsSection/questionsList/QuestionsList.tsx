import styles from '@/app/ui/components/questionsSection/questionsList/questionsList.module.css';
import { Question } from '@/app/ui/components/question/Question';
import { apiClient } from '@/app/lib/API';
import { EmptyQuestions } from '../../emptyQuestions/EmptyQuestions';

export const QuestionsAndAnswersList = async () => {
  const questionAnswerPairs = await apiClient.getQuestions();
  const areQuestionsEmpty = questionAnswerPairs.length === 0;
  return areQuestionsEmpty ? (
    <EmptyQuestions />
  ) : (
    <div className={styles.container}>
      {questionAnswerPairs.map((questionAnswerPair) => {
        const { question, answer, id } = questionAnswerPair;
        return <Question key={id} question={question} answer={answer} id={id} />;
      })}
    </div>
  );
};
