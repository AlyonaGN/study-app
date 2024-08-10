'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/app/ui/components/button/Button';
import { CREATE_QUESTION_BUTTON } from '@/app/ui/utils/buttonTexts';
import styles from '@/app/ui/components/form/form.module.css';
import { Input } from '@/app/ui/components/types';
import createQuestion from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Tooltip } from '@/app/ui/components/tooltip/Tooltip';
import { LATENCY_TOOLTIP } from '@/app/ui/utils/tooltipTexts';
import { FormState } from '@/app/ui/components/types';

interface FormProps {
  inputs: Array<Input>;
}

const initialState = {
  message: '',
};

export const Form = ({ inputs }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isLatencyAdded, setIsLatencyAdded] = useState(false);
  const createQuestionWithArgs = createQuestion.bind(null, isLatencyAdded);

  const handleSubmitForm = async (previousState: FormState, formData: FormData) => {
    const res = await createQuestionWithArgs(previousState, formData);
    if (!res?.message) ref?.current?.reset();
    return res;
  };
  const [state, formAction] = useFormState(handleSubmitForm, initialState);

  const onToggleLatency = () => {
    setIsLatencyAdded((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <form ref={ref} className={styles.form} action={formAction}>
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
        <div className={styles.bottomContainer}>
          <Button type="submit" text={CREATE_QUESTION_BUTTON} />
          <Tooltip text={LATENCY_TOOLTIP}>
            <input
              checked={isLatencyAdded}
              className={styles.checkbox}
              type="checkbox"
              onChange={onToggleLatency}
            />
          </Tooltip>
        </div>
      </form>
    </div>
  );
};
