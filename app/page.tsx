import styles from './page.module.css';
import { QuestionForm } from '@/app/ui/components/questionForm/QuestionForm';
import { EmptyQuestions } from '@/app/ui/components/emptyQuestions/EmptyQuestions';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>
        <EmptyQuestions />
      </div>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>
        <QuestionForm />
      </div>
    </main>
  );
}
