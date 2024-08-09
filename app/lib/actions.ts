'use server';

import { z } from 'zod';
import { emptyAnswer, emptyQuestion } from '@/app/ui/utils/errorsTexts';
import { ANSWER_INPUT_NAME, QUESTION_INPUT_NAME } from '@/app/ui/utils/formTexts';
import { BASE_URL, buildQuestionandAnswerObject, TAGS } from '@/app/lib/utils';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

const schema = z.object({
  question: z.string({
    invalid_type_error: emptyQuestion,
  }),
  answer: z.string({
    invalid_type_error: emptyAnswer,
  }),
});

export default async function createQuestion(userId: string, formData: FormData) {
  // Validate the inputs
  const validatedFields = schema.safeParse({
    question: formData.get(QUESTION_INPUT_NAME),
    answer: formData.get(ANSWER_INPUT_NAME),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Cook the data for the database
  const { question, answer } = validatedFields.data;

  // Build a question&answer obj
  const newQuestionAndAnswer = buildQuestionandAnswerObject({
    question,
    answer,
    userId,
  });
  console.log('here', JSON.stringify(newQuestionAndAnswer));

  // post a new question
  try {
    const response = await fetch(`${BASE_URL}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestionAndAnswer),
    });

    const data = await response.json();
    console.log('Created question:', data);
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
