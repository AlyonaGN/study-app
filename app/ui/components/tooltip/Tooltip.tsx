import styles from '@/app/ui/components/tooltip/tooltip.module.css';
import { PropsWithChildren } from 'react';

interface TooltipProps {
  text: string;
}

export const Tooltip = ({ text, children }: PropsWithChildren<TooltipProps>) => {
  return (
    <div className={styles.tooltip} data-tooltip-text={text}>
      {children}
    </div>
  );
};
