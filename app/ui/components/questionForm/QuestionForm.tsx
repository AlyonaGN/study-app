import { Form } from '@/app/ui/components/form/Form';

export const QuestionForm = () => {
  return (
    <Form
      inputs={[{ name: 'input', placeholder: 'placeholder', type: 'text' }]}
      submitHandler={() => null}
    />
  );
};
