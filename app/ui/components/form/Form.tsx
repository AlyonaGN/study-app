'use client';
import React, { useRef } from 'react';
import { Button } from '@/app/ui/components/button/Button';
import styles from '@/app/ui/components/form/form.module.css';
import { Input } from '@/app/ui/components/types';
import { useFormState } from 'react-dom';
import { FormState } from '@/app/ui/components/types';

interface FormProps {
  inputs: Array<Input>;
  submitAction: (
    previousState: FormState,
    formData: FormData,
  ) => Promise<{
    message: string;
  }>;
  buttonText: string;
}

const initialState = {
  message: '',
};

export const Form = ({ inputs, submitAction, buttonText }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmitForm = async (previousState: FormState, formData: FormData) => {
    const res = await submitAction(previousState, formData);
    if (!res?.message) ref?.current?.reset();
    return res;
  };
  const [state, formAction] = useFormState(handleSubmitForm, initialState);

  return (
    <div className={styles.container}>
      <form ref={ref} className={styles.form} action={formAction}>
        {inputs.map((input) => {
          const { type, name, placeholder, defaultValue = '' } = input;
          return (
            <div key={name} className={styles.field}>
              <label className={styles.label}>
                {name}
                <input
                  className={styles.input}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                />
              </label>
            </div>
          );
        })}
        {state?.message && <p className={styles.warning}>{state.message}</p>}
        <div className={styles.buttonContainer}>
          <Button type="submit" text={buttonText} />
        </div>
      </form>
    </div>
  );
};
