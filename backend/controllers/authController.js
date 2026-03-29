const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || '7d',
    });
};

const registerUser = async (req, res) => {
    try {
        const { username, mobileNumber, password, email } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ $or: [{ mobileNumber }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists with this username or mobile number' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user - Explicitly set role to 'user' to prevent role-injection
        const user = await User.create({
            username,
            mobileNumber,
            password: hashedPassword,
            email: email || undefined,
            role: 'user'
        });

        if (user) {
            const token = generateToken(user._id);

            // Set HTTP-only cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            res.status(201).json({
                _id: user.id,
                username: user.username,
                mobileNumber: user.mobileNumber,
                role: user.role,
                token
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { mobileNumber, password } = req.body;

        // Check for user
        const user = await User.findOne({ mobileNumber });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = generateToken(user._id);

            // Set HTTP-only cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            res.json({
                _id: user.id,
                username: user.username,
                mobileNumber: user.mobileNumber,
                role: user.role,
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid mobile number or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const logoutUser = (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password').populate('badges');
        if (user) {
            const Problem = require('../models/Problem');
            const totalProblems = await Problem.countDocuments();
            const userObj = user.toObject();

            // Explicitly convert Mongoose Map to POJO to ensure Express JSON stringify works
            if (user.activityMap && typeof user.activityMap.get === 'function') {
                userObj.activityMap = Object.fromEntries(user.activityMap);
            } else if (user.activityMap) {
                userObj.activityMap = user.activityMap; // if already a pojo
            } else {
                userObj.activityMap = {};
            }

            userObj.totalPlatformProblems = totalProblems;
            res.json(userObj);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile
};
