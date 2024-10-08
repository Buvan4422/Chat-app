const express = require('express');

const router = express.Router();
const { signup, login, logout } = require('../controllers/auth.controllers.js');
router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

module.exports = router;
