const express = require('express');
const { registerHandler, loginHandler } = require('../userHandler/userHandlers');
const router = express.Router();
router.post('/login', loginHandler);
router.post('/register', registerHandler)

module.exports = router;