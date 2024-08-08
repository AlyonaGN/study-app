import styles from './page.module.css';
import { QuestionForm } from '@/app/ui/components/questionForm/QuestionForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>main left</div>
      <div className={`${styles.flexItem} ${styles.shadowed}`}>
        <QuestionForm />
      </div>
    </main>
  );
}
