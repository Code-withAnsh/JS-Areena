const express = require('express');
const { getHint, explainSolution, getAiSolution } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const aiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Too many AI requests, please try again in a minute'
});

router.post('/hint', protect, aiLimiter, getHint);
router.post('/explain-solution', protect, aiLimiter, explainSolution);
router.post('/get-solution', protect, aiLimiter, getAiSolution);

module.exports = router;
