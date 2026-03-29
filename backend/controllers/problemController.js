const Problem = require('../models/Problem');

// @desc    Get all problems
// @route   GET /api/problems
// @access  Public
const getProblems = async (req, res) => {
    try {
        const { category, type, difficulty, search, page = 1, limit = 20, sort = 'topicOrder' } = req.query;

        let query = {};

        if (category) query.category = category;
        if (type) query.type = type;
        if (difficulty) query.difficulty = difficulty;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        const sortObject = {};
        if (sort === 'topicOrder') sortObject.topicOrder = 1;
        else if (sort === 'difficulty') {
            // Custom difficulty sort if needed, or string sort
            sortObject.difficulty = 1;
        } else if (sort === 'acceptanceRate') {
            sortObject.acceptanceRate = -1; // Highest first
        } else {
            sortObject[sort] = 1;
        }

        const startIndex = (page - 1) * limit;
        const total = await Problem.countDocuments(query);

        const problems = await Problem.find(query)
            .select('-solutionCode -solutionExplanation -testCases') // Hide sensitives
            .sort(sortObject)
            .skip(startIndex)
            .limit(parseInt(limit));

        res.json({
            success: true,
            count: problems.length,
            total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
            data: problems
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get total problem count
// @route   GET /api/problems/count
// @access  Public
const getProblemCount = async (req, res) => {
    try {
        const total = await Problem.countDocuments({});
        const categories = await Problem.distinct('category');
        res.json({ count: total, categoriesCount: categories.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single problem
// @route   GET /api/problems/:slug
// @access  Public
const getProblemBySlug = async (req, res) => {
    try {
        const problem = await Problem.findOne({ slug: req.params.slug })
            .select('-solutionCode -solutionExplanation'); // Keep hidden testcases hidden from frontend check, though we might still send them if we want client evaluation (we don't for security)

        // Filter out hidden test cases
        if (problem) {
            const problemObj = problem.toObject();
            problemObj.testCases = problemObj.testCases.filter(tc => !tc.isHidden);
            res.json(problemObj);
        } else {
            res.status(404).json({ message: 'Problem not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create new problem
// @route   POST /api/problems
// @access  Private/Admin
const createProblem = async (req, res) => {
    try {
        // Generate slug from title if not provided
        if (!req.body.slug && req.body.title) {
            req.body.slug = req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }
        const problem = await Problem.create(req.body);
        res.status(201).json(problem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update problem
// @route   PUT /api/problems/:slug
// @access  Private/Admin
const updateProblem = async (req, res) => {
    try {
        let problem = await Problem.findOne({ slug: req.params.slug });
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        problem = await Problem.findOneAndUpdate({ slug: req.params.slug }, req.body, {
            new: true,
            runValidators: true
        });
        res.json(problem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete problem
// @route   DELETE /api/problems/:slug
// @access  Private/Admin
const deleteProblem = async (req, res) => {
    try {
        const problem = await Problem.findOneAndDelete({ slug: req.params.slug });
        if (!problem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.json({ message: 'Problem deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProblems,
    getProblemCount,
    getProblemBySlug,
    createProblem,
    updateProblem,
    deleteProblem
};
