// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const quotes = [];

app.post('/addQuote', (req, res) => {
  const { author, text } = req.body;
  const newQuote = { author, text };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

app.get('/getQuotes', (req, res) => {
  res.json(quotes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
