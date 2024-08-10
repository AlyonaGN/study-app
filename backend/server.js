const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// allow the port at which the client is running as a valid origin
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

// Mock DB
let questions = [
  {
    question: 'Did Alena go extra miles?',
    answer: 'Yep!',
    id: '5e6f7g8h',
    date: 1691500800000,
  },

  {
    question: 'Did Alena meet the requirements?',
    answer: 'Yes, she did :)',
    id: '1a2b3c4f',
    date: 1691500800000,
  },
];

// GET route to fetch all questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// GET route to fetch a question by id
app.get('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const question = questions.find((q) => q.id === id);

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});

// POST route to create a new question
app.post('/api/questions', (req, res) => {
  const newQuestion = req.body;
  questions.push(newQuestion);
  res.status(201).json({ message: 'Question created successfully', question: newQuestion });
});

// DELETE route to remove a question by id
app.delete('/api/questions/:questionId', (req, res) => {
  const { questionId } = req.params;
  console.log(id, question);
  const questionIndex = questions.findIndex((q) => q.id === id);

  if (questionIndex !== -1) {
    const removedQuestion = questions.splice(questionIndex, 1);
    res.status(200).json({ message: 'Question removed successfully', question: removedQuestion });
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});

// DELETE route to remove all questions
app.delete('/api/questions', (req, res) => {
  questions = [];
  res.status(200).json({ message: 'All questions removed successfully' });
});

// PUT route to update a question by id
app.put('/api/questions/:id', (req, res) => {
  const { id } = req.params;
  const updatedQuestion = req.body;

  const questionIndex = questions.findIndex((q) => q.id === id);

  if (questionIndex !== -1) {
    // Update the question
    questions[questionIndex] = { ...questions[questionIndex], ...updatedQuestion };
    res
      .status(200)
      .json({ message: 'Question updated successfully', question: questions[questionIndex] });
  } else {
    res.status(404).json({ message: 'Question not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
