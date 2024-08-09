'use server';

import { z } from 'zod';
import { emptyAnswer, emptyQuestion } from '@/app/ui/utils/errorsTexts';
import { ANSWER_INPUT_NAME, QUESTION_INPUT_NAME } from '@/app/ui/utils/formTexts';
import { buildQuestionandAnswerObject } from '@/app/lib/utils';
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

  // A mock example of how that insertion would look like if I had an SQL DB
  /*   try {
    await sql`
      INSERT INTO questions (question, answer, questionAndAnswerId, userId)
      VALUES (${question}, ${answer}, ${questionAndAnswerId}, ${userId})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Question.',
    };
  } */

  // Logic to insert a new question into my mock DB
  const newQuestionAndAnswer = buildQuestionandAnswerObject({
    question,
    answer,
    userId,
  });

  // invalidate the tag for the questions
  revalidateTag('questions');
  // redirect to the path with questions to see the changes (in a real project, most likely, this would be a different path)
  redirect(`/`);
}
