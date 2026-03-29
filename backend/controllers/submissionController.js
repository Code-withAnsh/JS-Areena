const Submission = require('../models/Submission');
const Problem = require('../models/Problem');
const User = require('../models/User');
const { updateStreak } = require('../utils/streakCalculator');
const { checkAndAwardBadges } = require('../utils/badgeChecker');

// We need to re-implement or adapt the AI evaluation logic here
// since evaluateSubmission in aiController is an Express endpoint handler.
// For now, we will fetch to our own endpoint or just extract the logic.
// The cleanest way is to create a shared `evaluateLogic` function in aiController,
// but to fix the immediate crash, we'll just mock it or rewrite `submitCode` to use fetch locally, 
// or better yet, move the core evaluate function out so both can use it.

const { evaluateLogic } = require('./aiController');

const runCode = async (req, res) => {
    try {
        const { problemId, code } = req.body;
        const problem = await Problem.findById(problemId);

        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        // Evaluate against visible test cases only (limitCases = true in our aiController logic means slice(0,4))
        // Actually, the runCode API only needs to return the results.
        const evaluationData = await evaluateLogic(problem, code, true);

        // The frontend expects { success: true, results: [...] }
        res.json({ success: true, results: evaluationData.results });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const submitCode = async (req, res) => {
    try {
        const { problemId, code } = req.body;
        const userId = req.user.id;

        const problem = await Problem.findById(problemId);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });

        // Step 1: Execute against ALL test cases (limitCases = false)
        const evaluationData = await evaluateLogic(problem, code, false);

        let status = 'Wrong Answer';
        if (evaluationData.status === 'all_passed') {
            status = 'Accepted';
        } else if (evaluationData.status === 'all_failed') {
            status = 'Wrong Answer';
        } else {
            status = 'Partial'; // Or whatever generic status
        }

        // Get the first error explanation if any
        let firstError = null;
        if (status !== 'Accepted') {
            const failedCase = evaluationData.results.find(r => !r.passed);
            if (failedCase) {
                firstError = failedCase.explanation || 'Failed test cases';
            }
        }

        // Save submission
        const submission = await Submission.create({
            user: userId,
            problem: problemId,
            code,
            status,
            aiVerdict: firstError,
            runtime: 0, // AI eval doesn't have a reliable runtime in ms for the code itself
            memory: 0
        });

        // Step 3: Update User Stats, Activity, and Streak
        const user = await User.findById(userId);
        if (user) {
            // Record Attempt
            if (!user.attemptedProblems.some(id => id.toString() === problemId.toString())) {
                user.attemptedProblems.push(problemId);
            }

            // Record Success
            if (status === 'Accepted') {
                const isFirstSolve = !user.solvedProblems.some(id => id.toString() === problemId.toString());
                if (isFirstSolve) {
                    user.solvedProblems.push(problemId);
                    user.totalSolved += 1;
                    if (problem.type === 'DSA') user.dsaSolved += 1;
                    if (problem.difficulty === 'Easy') user.easySolved += 1;
                    else if (problem.difficulty === 'Medium') user.mediumSolved += 1;
                    else if (problem.difficulty === 'Hard') user.hardSolved += 1;
                    problem.totalAccepted += 1;
                }
                // Only check badges on successful solves
                newBadges = await checkAndAwardBadges(userId, problemId);
            }

            // Global stats for problem
            problem.totalAttempts += 1;
            problem.acceptanceRate = (problem.totalAccepted / problem.totalAttempts) * 100;
            await problem.save();

            // Activity map update (Counts both passes and fails)
            const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
            let todayCount = user.activityMap.get(today) || 0;
            user.activityMap.set(today, todayCount + 1);
            user.markModified('activityMap');

            await user.save();

            // Streak update (Safe to call after save as it re-fetches or uses now logic)
            await updateStreak(userId);
        }

        res.json({
            success: true,
            submission,
            executionResults: evaluationData.results,
            newBadges
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMySubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find({ user: req.user.id })
            .populate('problem', 'title difficulty')
            .sort('-submittedAt');
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMySubmissionsByProblem = async (req, res) => {
    try {
        const submissions = await Submission.find({ user: req.user.id, problem: req.params.problemId })
            .sort('-submittedAt');
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    runCode,
    submitCode,
    getMySubmissions,
    getMySubmissionsByProblem
};
