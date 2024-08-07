import styles from '@/app/ui/components/heading/heading.module.css';

export enum HeadingLevel {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
}

interface HeadingProps {
  level: HeadingLevel;
  title: string;
}

export const Heading = ({ level, title }: HeadingProps) => {
  switch (level) {
    case HeadingLevel.One: {
      return <h1 className={`${styles.heading} ${styles.heading1}`}>{title}</h1>;
    }
    case HeadingLevel.Two: {
      return <h2 className={`${styles.heading} ${styles.heading2}`}>{title}</h2>;
    }
    case HeadingLevel.Three: {
      return <h3 className={`${styles.heading} ${styles.heading3}`}>{title}</h3>;
    }
    case HeadingLevel.Four: {
      return <h4 className={`${styles.heading} ${styles.heading4}`}>{title}</h4>;
    }
    case HeadingLevel.Five: {
      return <h5 className={`${styles.heading} ${styles.heading5}`}>{title}</h5>;
    }
    case HeadingLevel.Six: {
      return <h6 className={`${styles.heading} ${styles.heading6}`}>{title}</h6>;
    }
    default: {
      return <h3 className={`${styles.heading} ${styles.heading3}`}>{title}</h3>;
    }
  }
};
