const http = require('http');
const PORT = 8080;

http.createServer((req, res) => {
  res.end("Hello CI/CD 🚀");
}).listen(PORT);
``
