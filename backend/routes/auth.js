const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes'
});

router.post(
    '/register',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('mobileNumber', 'Mobile number is required').not().isEmpty(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    registerUser
);

router.post(
    '/login',
    loginLimiter,
    [
        check('mobileNumber', 'Mobile number is required').exists(),
        check('password', 'Password is required').exists()
    ],
    loginUser
);

router.post('/logout', logoutUser);

router.get('/me', protect, getUserProfile);

module.exports = router;
