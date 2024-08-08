import React from 'react';
import { Button } from '../button/Button';
import { CREATE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import styles from '@/app/ui/components/form/form.module.css';
import { Input } from '@/app/ui/components/types';

interface FormProps {
  inputs: Array<Input>;
  submitHandler: (state: unknown) => void;
}

export const Form = ({ inputs, submitHandler }: FormProps) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {inputs.map((input) => {
          const { type, name, placeholder } = input;
          return (
            <div key={name} className={styles.field}>
              <label className={styles.label}>
                {name}
                <input className={styles.input} type={type} name={name} placeholder={placeholder} />
              </label>
            </div>
          );
        })}
      </form>
      <Button text={CREATE_QUESTION_BUTTON} />
    </div>
  );
};
