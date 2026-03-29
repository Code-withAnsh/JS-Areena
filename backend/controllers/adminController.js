const User = require('../models/User');
const Problem = require('../models/Problem');
const bcrypt = require('bcryptjs');

// @desc    Get all users (Admin only)
// @route   GET /api/admin/users
const getAllUsers = async (req, res) => {
    try {
        const { search } = req.query;
        let query = {};

        if (search) {
            query = {
                $or: [
                    { username: { $regex: search, $options: 'i' } },
                    { mobileNumber: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const users = await User.find(query);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user password (Admin only)
// @route   PUT /api/admin/users/:id/password
const updateUserPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const user = await User.findById(req.params.id);

        if (user) {
            const salt = await bcrypt.genSalt(12);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            res.json({ message: 'Password updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new problem (Admin only)
// @route   POST /api/admin/problems
const createProblem = async (req, res) => {
    try {
        const {
            title, slug, description, difficulty, category, topic,
            testCases, starterCode, solutionCode, constraints, type
        } = req.body;

        const problem = await Problem.create({
            title,
            slug,
            description,
            difficulty,
            category,
            topic,
            testCases,
            starterCode,
            solutionCode,
            constraints,
            type: type || 'JS',
            createdBy: req.user.id
        });

        res.status(201).json(problem);
    } catch (error) {
        console.error('Error creating problem:', error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a user (Admin only)
// @route   DELETE /api/admin/users/:id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            // Prevent admin from deleting themselves maybe? 
            // Better to allow it if they really want, but usually we protect the last admin.
            await User.deleteOne({ _id: req.params.id });
            res.json({ message: 'User removed successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    updateUserPassword,
    createProblem,
    deleteUser
};
