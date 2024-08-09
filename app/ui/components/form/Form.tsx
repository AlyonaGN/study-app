import React from 'react';
import { Button } from '../button/Button';
import { CREATE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import styles from '@/app/ui/components/form/form.module.css';
import { Input } from '@/app/ui/components/types';
import createQuestion from '@/app/lib/actions';

interface FormProps {
  inputs: Array<Input>;
  userId: string;
}

export const Form = ({ inputs, userId }: FormProps) => {
  const createNewQuestion = createQuestion.bind(null, userId);
  return (
    <div className={styles.container}>
      <form className={styles.form} action={createNewQuestion}>
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
      <Button type="submit" text={CREATE_QUESTION_BUTTON} />
    </div>
  );
};
