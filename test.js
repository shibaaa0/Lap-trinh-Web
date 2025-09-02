// file: server.js
const http = require('http');

// tạo server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Node.js Web Server!\n');
});

// lắng nghe ở cổng 3000
server.listen(3000, () => {
  console.log('Server chạy tại http://localhost:3000/');
});
