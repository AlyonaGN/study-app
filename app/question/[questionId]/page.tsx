import { Heading, HeadingLevel } from '@/app/ui/components/heading/Heading';
import { apiClient } from '../../lib/API';
import { EDIT_QUESTION_FORM_HEADING } from '@/app/ui/utils/headingsTexts';
import { Form } from '@/app/ui/components/form/Form';
import { EDIT_QUESTION_FORM_INPUTS } from '@/app/ui/utils/formTexts';
import { Input, QuestionAnswerPair } from '@/app/ui/components/types';
import { editQuestion } from '@/app/lib/actions';
import { SAVE_CHANGES } from '@/app/ui/utils/buttonTexts';

interface EditQuestionProps {
  params: {
    questionId: string;
  };
}

const EditQuestion = async ({ params }: EditQuestionProps) => {
  const { questionId } = params;
  const questionAndAnswer = await apiClient.getQuestionById(questionId);

  const onSubmitEditedQuestion = editQuestion.bind(null, questionAndAnswer);

  const inputsWithPopulatedValue: Array<Input> = EDIT_QUESTION_FORM_INPUTS.map((input) => {
    const propName = input.name.toLowerCase() as keyof QuestionAnswerPair;
    return {
      ...input,
      defaultValue: questionAndAnswer[propName],
    };
  });

  return (
    <div>
      <Heading level={HeadingLevel.Two} title={EDIT_QUESTION_FORM_HEADING} />
      <Form
        buttonText={SAVE_CHANGES}
        inputs={inputsWithPopulatedValue}
        submitAction={onSubmitEditedQuestion}
      />
    </div>
  );
};

export default EditQuestion;
