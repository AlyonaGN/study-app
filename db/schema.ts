import { relations, sql } from 'drizzle-orm';
import { integer, sqliteTable, text, unique } from 'drizzle-orm/sqlite-core';
import { v4 as uuidv4 } from 'uuid';

const id = () =>
  text('id')
    .primaryKey()
    .$default(() => uuidv4());

const createdAt = () =>
  text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull();

export const users = sqliteTable('users', {
  id: id(),
  createdAt: createdAt(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  questions: many(questions),
}));

export const questions = sqliteTable(
  'questions',
  {
    id: id(),
    createdAt: createdAt(),
    createdById: text('createdById').notNull(),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
  },
  (table) => ({
    unq: unique().on(table.createdById, table.question),
  }),
);

export const questionsRelations = relations(questions, ({ many, one }) => ({
  questions: many(questions),
  createdBy: one(users, {
    references: [users.id],
    fields: [questions.createdById],
  }),
}));
