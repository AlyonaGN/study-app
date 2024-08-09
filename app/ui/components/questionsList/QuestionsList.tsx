import styles from '@/app/ui/components/questionsList/questionsList.module.css';
import { Question } from '@/app/ui/components/question/Question';
import { getQuestions } from '@/app/lib/data';

export const QuestionsAndAnswersList = async () => {
  const questionAnswerPairs = await getQuestions();

  return (
    <div className={styles.container}>
      {questionAnswerPairs.map((questionAnswerPair) => {
        const { question, answer, id } = questionAnswerPair;
        return <Question key={id} question={question} answer={answer} id={id} />;
      })}
    </div>
  );
};
