'use server';

import { ANSWER_INPUT_NAME, QUESTION_INPUT_NAME } from '@/app/ui/utils/formTexts';
import { buildQuestionandAnswerObject, TAGS, validationSchema } from '@/app/lib/utils';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { apiClient } from '@/app/lib/API';
import { FromState } from '@/app/ui/components/types';
import { noEmptyFields } from '@/app/ui/utils/errorsTexts';

export default async function createQuestion(prevState: FromState, formData: FormData) {
  // Validate the inputs
  const validatedFields = validationSchema.safeParse({
    question: formData.get(QUESTION_INPUT_NAME),
    answer: formData.get(ANSWER_INPUT_NAME),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: noEmptyFields,
    };
  }

  // Cook the data for the database
  const { question, answer } = validatedFields.data;

  // Build a question&answer obj
  const newQuestionAndAnswer = buildQuestionandAnswerObject({
    question,
    answer,
  });

  // post a new question
  try {
    apiClient.createQuestion(newQuestionAndAnswer);
    // invalidate the tag for the questions
    revalidateTag(TAGS.Questions);
  } catch (error) {
    console.error('Error creating question:', error);
    throw new Error('Failed to create question.');
  } finally {
    // redirect to the path with questions to see the changes (in a real project, most likely, this would be a different path)
    redirect(`/`);
  }
}
