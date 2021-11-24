const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/teste', (req, res) => {
  res.status(200).send({ message: 'Welcome to my API' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
