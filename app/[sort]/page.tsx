import { QuestionsSection } from '../ui/components/questionsSection/QuestionsSection';
import { SortProps } from '../ui/components/types';

const SortedHome = ({ params }: { params: SortProps }) => {
  return <QuestionsSection sort={params.sort} />;
};

export default SortedHome;
