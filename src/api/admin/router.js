const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authenticate = require('../../middleware/authentication');

router.post('/login', controller.login);
router.get('/dashboard', authenticate, controller.dashboard);

module.exports = router;
