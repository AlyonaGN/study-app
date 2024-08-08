import styles from '@/app/ui/components/pageSection/pageSection.module.css';
import { PropsWithChildren } from 'react';

export const PageSection = ({ children }: PropsWithChildren) => {
  return <div className={styles.section}>{children}</div>;
};
