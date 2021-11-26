require('dotenv').config();
const express = require('express');
const pessoasRoutes = require('./routes/pessoas');
const niveisRoutes = require('./routes/niveis');
const turmasRoutes = require('./routes/turmas');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/teste', (req, res) => {
  res.status(200).send({ message: 'Welcome to my API' });
});

app.use('/pessoas', pessoasRoutes);
app.use('/niveis', niveisRoutes);
app.use('/turmas', turmasRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
