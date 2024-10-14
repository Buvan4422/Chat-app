//import authRoutes from './router/auth.route.js';
const express = require('express');
const connect = require('./db/concdB.js');
const authRoutes = require('./router/auth.route.js');
const msgsRoutes = require('./router/msgs.route.js');
const userRoutes = require('./router/user.route.js');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 4000;
const { app, server } = require('./socket/socket.js');

require('dotenv').config();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/msgs', msgsRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(PORT, () => {
  connect();
  console.log('running at port', PORT);
});
