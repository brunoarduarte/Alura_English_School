const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/teste', (req, res) => {
  res.status(200).send({ message: 'Welcome to my API' });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
