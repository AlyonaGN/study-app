import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles.css';
import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { APP_HEADING } from '@/app/ui/utils/headingsTexts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Studocu Q&A App',
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
        <header>
          <Heading level={HeadingLevel.One} title={APP_HEADING} />
        </header>
        {children}
      </body>
    </html>
  );
}
