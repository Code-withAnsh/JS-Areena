const User = require('../models/User');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
            .select('-password -email -notifications') // hide sensitive data for public profile
            .populate('badges');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user) {
            user.avatar = req.body.avatar || user.avatar;
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                username: updatedUser.username,
                avatar: updatedUser.avatar
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateNotifications = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user) {
            user.notifications.emailEnabled = req.body.emailEnabled !== undefined ? req.body.emailEnabled : user.notifications.emailEnabled;
            user.notifications.whatsappEnabled = req.body.whatsappEnabled !== undefined ? req.body.whatsappEnabled : user.notifications.whatsappEnabled;
            user.notifications.whatsappNumber = req.body.whatsappNumber || user.notifications.whatsappNumber;
            user.notifications.reminderTime = req.body.reminderTime || user.notifications.reminderTime;

            await user.save();
            res.json({ message: 'Notifications updated', notifications: user.notifications });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLeaderboard = async (req, res) => {
    try {
        const topUsers = await User.find()
            .select('username avatar totalSolved currentStreak badges')
            .sort({ totalSolved: -1 })
            .limit(50)
            .populate('badges', 'icon name rarity');
        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getActivityMap = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('activityMap');
        if (user) {
            res.json(user.activityMap);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateProfile,
    updateNotifications,
    getLeaderboard,
    getActivityMap
};
