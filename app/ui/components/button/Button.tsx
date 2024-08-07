import styles from '@/app/ui/components/button/button.module.css';

export enum ButtonColor {
  default,
  red,
}

interface ButtonProps {
  color?: ButtonColor;
  text: string;
}

export const Button = ({ color = ButtonColor.default, text }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${color === ButtonColor.red ? styles.red : ''}`}
    >
      {text}
    </button>
  );
};
