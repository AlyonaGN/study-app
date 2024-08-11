import { PropsWithChildren } from 'react';
import { QuestionsSection } from './ui/components/questionsSection/QuestionsSection';
import { SortMode } from './ui/components/types';

export const Home: React.FC<PropsWithChildren> = () => {
  return <QuestionsSection sort={SortMode.ByDate} />;
};

export default Home;
