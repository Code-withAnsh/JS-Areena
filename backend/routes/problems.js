const express = require('express');
const { getProblems, getProblemCount, getProblemBySlug, createProblem, updateProblem, deleteProblem } = require('../controllers/problemController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getProblems)
    .post(protect, admin, createProblem);

router.route('/count')
    .get(getProblemCount);

router.route('/:slug')
    .get(getProblemBySlug)
    .put(protect, admin, updateProblem)
    .delete(protect, admin, deleteProblem);

module.exports = router;
