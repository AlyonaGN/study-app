import styles from '@/app/ui/components/button/button.module.css';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonColor {
  Default,
  Red,
}

export enum ButtonSize {
  Default,
  XS,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: ButtonColor;
  text: string;
  size?: ButtonSize;
}

export const Button = ({
  buttonColor = ButtonColor.Default,
  size = ButtonSize.Default,
  text,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${buttonColor === ButtonColor.Red ? styles.red : ''} ${size === ButtonSize.XS ? styles.xs : ''} `}
      {...rest}
    >
      {text}
    </button>
  );
};
