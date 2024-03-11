const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
const PORT = process.env.PORT || 3009;
const db = knex({
  client: 'pg',
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'drhRjkb3RAf2Dj',
    database: 'postgres',
  },
});

app.use(cors());
app.use(bodyParser.json());
app.post('/enviar-email', async (req, res) => {
  const { email } = req.body;
  try {
    await db('emails').insert({ email });
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ error: 'Erro ao enviar email' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
