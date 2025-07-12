const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { registerValidation, loginValidation } = require('../middleware/validation');

// Register route
router.post('/register', registerValidation, authController.register);

// Login route
router.post('/login', loginValidation, authController.login);

// Get current user profile (protected route)
router.get('/profile', authenticateToken, authController.getProfile);

module.exports = router; 