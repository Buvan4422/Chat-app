const express = require('express');
const protectRoute = require('../middleware/protectRoute.js');
const router = express.Router();
const { sendMsg, getMessage } = require('../controllers/msg.contoller.js');

router.post('/send/:id', protectRoute, sendMsg);
router.post('/:id', protectRoute, getMessage);
module.exports = router;
