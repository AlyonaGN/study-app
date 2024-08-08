import styles from '@/app/ui/components/questionsSection/questionsSection.module.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { QuestionsAndAnswersList } from '@/app/ui/components/questionsList/QuestionsList';

const tempQuestions = [
  { question: 'Did Alena meet all requirements?', answer: 'Yes, she did!', id: '1' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
  { question: 'Did Alena go extra miles?', answer: 'Yep!', id: '2' },
];

export const QuestionsSection = () => {
  return (
    <div className={styles.container}>
      <Heading level={HeadingLevel.Two} title={CREATED_QUESTIONS_HEADING} />
      <QuestionsAndAnswersList questionAnswerPairs={tempQuestions} />
    </div>
  );
};
