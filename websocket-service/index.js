const express = require("express");
const { Server } = require("ws");

const app = express();
const port = 3001;

const wss = new Server({ noServer: true });

wss.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("message", (message) => console.log("Received:", message));
  socket.send("Welcome to the WebSocket server!");
});

app.listen(port, () =>
  console.log(`WebSocket server listening on port ${port}`)
);
