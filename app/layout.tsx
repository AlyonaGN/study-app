import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { APP_HEADING } from '@/app/ui/utils/headingsTexts';
import styles from './page.module.css';
import { QuestionForm } from '@/app/ui/components/questionForm/QuestionForm';
import { PageSection } from './ui/components/pageSection/PageSection';
import SortProvider from './sortProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Study Q&A App',
  description: 'Created by Alena Gnevusheva',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SortProvider>
          <header>
            <Heading level={HeadingLevel.One} title={APP_HEADING} />
          </header>
          <main className={styles.main}>
            <PageSection>{children}</PageSection>
            <PageSection>
              <QuestionForm />
            </PageSection>
          </main>
        </SortProvider>
      </body>
    </html>
  );
}
