'use client';
import React, { useRef } from 'react';
import { Button } from '../button/Button';
import { CREATE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import styles from '@/app/ui/components/form/form.module.css';
import { FromState, Input } from '@/app/ui/components/types';
import createQuestion from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

interface FormProps {
  inputs: Array<Input>;
}

const initialState = {
  message: '',
};

export const Form = ({ inputs }: FormProps) => {
  const [state, formAction] = useFormState(createQuestion, initialState);
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);
  const submitHandler = async (formData: FormData) => {
    await formAction(formData);
    ref.current?.reset();
  };

  return (
    <div className={styles.container}>
      <form ref={ref} className={styles.form} action={submitHandler}>
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
        {state?.message && <p className={styles.warning}>{state.message}</p>}
        <Button type="submit" text={CREATE_QUESTION_BUTTON} disabled={pending} />
      </form>
    </div>
  );
};
