const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store
let questions = [
  {
    question: 'Did Alena go extra miles?',
    answer: 'Yep!',
    id: '5e6f7g8h',
    date: 1691500800000,
    userId: '123',
  },

  {
    question: 'Did Alena meet the requirements?',
    answer: 'Yes, she did :)',
    id: '1a2b3c4f',
    date: 1691500800000,
    userId: '123',
  },
];

// GET route to fetch all questions
app.get('/questions', (req, res) => {
  res.json(questions);
});

// POST route to create a new question
app.post('/questions', (req, res) => {
  const newQuestion = req.body;
  questions.push(newQuestion);
  res.status(201).json({ message: 'Question created successfully', question: newQuestion });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
