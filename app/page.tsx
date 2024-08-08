import styles from './page.module.css';
import { QuestionForm } from '@/app/ui/components/questionForm/QuestionForm';
import { QuestionsSection } from '@/app/ui/components/questionsSection/QuestionsSection';
import { PageSection } from './ui/components/pageSection/PageSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <PageSection>
        <QuestionsSection />
      </PageSection>
      <PageSection>
        <QuestionForm />
      </PageSection>
    </main>
  );
}
