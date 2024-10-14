const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3232'],
    methods: ['GET', 'POST'],
  },
});

const getReceiverSocket = (receiverid) => {
  return useSocketMap[receiverid];
};

const useSocketMap = {}; //{userId: socketId}

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== 'undefined') {
    useSocketMap[userId] = socket.id;
  }

  io.emit('onlineUsers', Object.keys(useSocketMap));

  socket.on('disconnected', () => {
    console.log('User disconnected', socket.id);
    delete useSocketMap[userId];
    io.emit('onlineUsers', Object.keys(useSocketMap));
  });
});

module.exports = { app, io, server, getReceiverSocket };
