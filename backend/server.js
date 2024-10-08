//import authRoutes from './router/auth.route.js';
const express = require('express');
const app = express();
const connect = require('./db/concdB.js');
const authRoutes = require('./router/auth.route.js');
const msgsRoutes = require('./router/msgs.route.js');
const userRoutes = require('./router/user.route.js');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;
require('dotenv').config();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/msgs', msgsRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  connect();
  console.log('running at port', port);
});
