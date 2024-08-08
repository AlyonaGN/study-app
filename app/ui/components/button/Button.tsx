import styles from '@/app/ui/components/button/button.module.css';

export enum ButtonColor {
  Default,
  Red,
}

export enum ButtonSize {
  Default,
  XS,
}

interface ButtonProps {
  color?: ButtonColor;
  text: string;
  size?: ButtonSize;
}

export const Button = ({
  color = ButtonColor.Default,
  size = ButtonSize.Default,
  text,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${color === ButtonColor.Red ? styles.red : ''} ${size === ButtonSize.XS ? styles.xs : ''} `}
    >
      {text}
    </button>
  );
};
