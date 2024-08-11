import styles from '@/app/ui/components/questionsSection/questionsList/questionsList.module.css';
import { Question } from '@/app/ui/components/question/Question';
import { EmptyQuestions } from './emptyQuestions/EmptyQuestions';
import { apiClient } from '@/app/lib/API';
import { SortProps } from '../../types';
import { ButtonsWrapper } from '../buttonsWrapper/ButtonsWrapper';

export const QuestionsList = async ({ sort }: SortProps) => {
  const questionAnswerPairs = await apiClient.getQuestions({ sortType: sort });
  const areQuestionsEmpty = questionAnswerPairs.length === 0;
  if (areQuestionsEmpty) return <EmptyQuestions />;
  return (
    <div test-id="questions-list" className={styles.container}>
      {questionAnswerPairs.map((questionAnswerPair) => {
        const { question, answer, id } = questionAnswerPair;
        return <Question key={id} question={question} answer={answer} id={id} />;
      })}
      <ButtonsWrapper />
    </div>
  );
};
