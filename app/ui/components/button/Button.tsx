'use client';
import styles from '@/app/ui/components/button/button.module.css';
import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import { ButtonColor, ButtonSize } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  const { pending } = useFormStatus();
  return (
    <button
      type="button"
      disabled={pending}
      className={`${styles.button} ${buttonColor === ButtonColor.Red ? styles.red : ''} ${size === ButtonSize.XS ? styles.xs : ''} `}
      {...rest}
    >
      {text}
    </button>
  );
};
