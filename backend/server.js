//import authRoutes from './router/auth.route.js';
const express = require('express');
const connect = require('./db/concdB.js');
const authRoutes = require('./router/auth.route.js');
const msgsRoutes = require('./router/msgs.route.js');
const userRoutes = require('./router/user.route.js');
const cookieParser = require('cookie-parser');
const path = require('path');
const PORT = process.env.PORT || 4000;
const { app, server } = require('./socket/socket.js');

require('dotenv').config();
const _dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/msgs', msgsRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(_dirname, '/frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
  connect();
  console.log('running at port', PORT);
});
