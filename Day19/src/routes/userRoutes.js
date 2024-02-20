const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/addValidatedUser', userController.addUserWithValidationController);

module.exports = router;
