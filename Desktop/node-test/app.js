const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Мой первый сервер на Node.js работает!</h1>');
});

server.listen(3001, () => {
  console.log('Сервер запущен: http://localhost:3001');
});