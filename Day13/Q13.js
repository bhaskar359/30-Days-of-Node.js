const express = require("express");
const http = require('http');
const WebSocket = require('ws');

const PORT = 8080;
const Q13 = express();
Q13.use(express.json());
const server = http.createServer(Q13);

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });
  wss.on('connection', (ws) => {
      console.log('A client connected');

      ws.on('message', (message) => {
          console.log('Received: ', message.toString());
          ws.send(message.toString());
      });

      ws.on('close', () => {
          console.log('A client disconnected');
      });
  });
}

setupWebSocket(server);
Q13.get('/websocket', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
