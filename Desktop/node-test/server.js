const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Мой Express сервер!</h1><p>Открой /api/hello</p>');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Привет от API!', time: new Date() });
});

app.listen(3001, () => {
  console.log('Express запущен: http://localhost:3001');
});
