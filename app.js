const express = require('express');
const http = require('http');

const app = express()
const PORT = 8000

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});