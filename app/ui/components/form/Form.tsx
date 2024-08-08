import React, { HTMLInputTypeAttribute, useActionState } from 'react';

interface Input {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

interface FormProps {
  inputs: Array<Input>;
  submitHandler: (state: unknown) => void;
}

export const Form = ({ inputs, submitHandler }: FormProps) => {
  const [error, submitAction, isPending] = useActionState(submitHandler, null);

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
    </form>
  );
};
