const express = require('express');
const getUserForSidebar = require('../controllers/user.controller.js');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get('/', protectRoute, getUserForSidebar);
module.exports = router;
