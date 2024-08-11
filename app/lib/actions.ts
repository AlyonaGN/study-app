'use server';
import {
  buildEditedQuestionAndAnswer,
  buildQuestionandAnswerObject,
  CLIENT_ROUTES,
  TAGS,
  validateQuestionForm,
} from '@/app/lib/utils';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { apiClient } from '@/app/lib/API';
import { FormState, QuestionAnswerPair } from '@/app/ui/components/types';
import { noEmptyFields } from '@/app/ui/utils/errorsTexts';
import { delay } from '@/app/ui/components/utils';

export default async function createQuestion(
  isLatencyAdded: boolean,
  previousState: FormState,
  formData: FormData,
) {
  if (isLatencyAdded) {
    await delay(5000);
  }
  // Validate the inputs
  const validatedFields = validateQuestionForm(formData);
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      message: noEmptyFields,
    };
  }
  const { question, answer } = validatedFields.data;

  // Build a question&answer obj
  const newQuestionAndAnswer = buildQuestionandAnswerObject({
    question,
    answer,
  });

  // post a new question
  try {
    await apiClient.createQuestion(newQuestionAndAnswer);
    // invalidate the tag for the questions
    revalidateTag(TAGS.Questions);
  } catch (error) {
    console.error('Error creating question:', error);
    throw new Error('Failed to create question.');
  } finally {
    // redirect to the path with questions to see the changes (in a real project, most likely, this would be a different path)
    redirect(CLIENT_ROUTES.Main);
  }
}

export async function removeAllQuestions() {
  try {
    // Call the API to delete all questions
    await apiClient.deleteAllQuestions();
    // Invalidate the tag for the questions
    revalidateTag(TAGS.Questions);
  } catch (error) {
    console.error('Error removing all questions:', error);
    throw new Error('Failed to remove all questions.');
  } finally {
    // Redirect to the path with questions to see the changes (in a real project, most likely, this would be a different path)
    redirect(CLIENT_ROUTES.Main);
  }
}

export async function removeQuestionById(questionId: string) {
  try {
    // Call the API to delete the question by ID
    await apiClient.deleteQuestionById(questionId);
    // Invalidate the tag for the questions
    revalidateTag(TAGS.Questions);
  } catch (error) {
    console.error('Error removing question:', error);
    throw new Error('Failed to remove question.');
  } finally {
    // Redirect to the path with questions to see the changes (in a real project, most likely, this would be a different path)
    redirect(CLIENT_ROUTES.Main);
  }
}

export async function editQuestion(
  existingQuestion: QuestionAnswerPair,
  previousState: FormState,
  formData: FormData,
) {
  try {
    // Validate the inputs
    const validatedFields = validateQuestionForm(formData);
    // Return early if the form data is invalid
    if (!validatedFields.success) {
      return {
        message: noEmptyFields,
      };
    }
    const { question, answer } = validatedFields.data;
    const updatedQuestion = buildEditedQuestionAndAnswer(existingQuestion, question, answer);
    await apiClient.updateQuestion(existingQuestion.id, updatedQuestion);
    revalidateTag(TAGS.Questions);
    revalidateTag(`${TAGS.Question}:${existingQuestion.id}`);
  } catch (error) {
    console.error('Error updating question:', error);
    throw new Error('Failed to update question.');
  } finally {
    redirect(CLIENT_ROUTES.Main);
  }
}
