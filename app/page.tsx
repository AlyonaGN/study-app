import { PropsWithChildren } from 'react';
import { QuestionsSection } from './ui/components/questionsSection/QuestionsSection';
import { SortMode } from './ui/components/types';

const Home = () => {
  return <QuestionsSection sort={SortMode.ByDate} />;
};

export default Home;
