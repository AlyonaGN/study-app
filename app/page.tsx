import styles from './page.module.css';
import { Question } from './ui/components/question/Question';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>main</div>
      <Question question="Test question?" answer="Test answer" />
    </main>
  );
}
