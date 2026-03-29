const express = require('express');
const { runCode, submitCode, getMySubmissions, getMySubmissionsByProblem } = require('../controllers/submissionController');
const { evaluateSubmission } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const evalLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // 10 requests per minute
    message: 'Too many evaluation requests, please try again in a minute'
});

router.post('/run', runCode);
router.post('/evaluate', protect, evalLimiter, evaluateSubmission);
router.post('/submit', protect, submitCode);
router.get('/my', protect, getMySubmissions);
router.get('/:problemId/my', protect, getMySubmissionsByProblem);

module.exports = router;
