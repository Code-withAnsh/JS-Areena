const User = require('../models/User');
const Badge = require('../models/Badge');
const Problem = require('../models/Problem');

const checkAndAwardBadges = async (userId, problemId) => {
    const user = await User.findById(userId).populate('badges');
    const problem = await Problem.findById(problemId);
    const allBadges = await Badge.find();

    const earnedBadgeIds = user.badges.map(b => b._id.toString());
    const newAwards = [];

    for (const badge of allBadges) {
        if (earnedBadgeIds.includes(badge._id.toString())) continue;

        let earned = false;

        // Check conditions
        if (badge.condition === 'first_solve') {
            if (user.totalSolved >= 1) earned = true;
        }
        else if (badge.condition === 'solved_count') {
            if (user.totalSolved >= Number(badge.value)) earned = true;
        }
        else if (badge.condition === 'streak') {
            if (user.currentStreak >= Number(badge.value)) earned = true;
        }
        else if (badge.condition === 'difficulty_count') {
            const { difficulty, count } = badge.value; // e.g., { difficulty: 'Hard', count: 10 }
            if (difficulty === 'Easy' && user.easySolved >= count) earned = true;
            else if (difficulty === 'Medium' && user.mediumSolved >= count) earned = true;
            else if (difficulty === 'Hard' && user.hardSolved >= count) earned = true;
        }
        else if (badge.condition === 'category_complete') {
            const category = badge.value; // string
            // A bit heavy query: check if user solved all problems in this category
            const categoryProblemsCount = await Problem.countDocuments({ category });
            const userCategorySolved = await Problem.countDocuments({
                _id: { $in: user.solvedProblems },
                category
            });
            if (categoryProblemsCount > 0 && userCategorySolved === categoryProblemsCount) {
                earned = true;
            }
        }
        else if (badge.condition === 'special') {
            if (badge.name === 'Night Owl') {
                const hour = new Date().getHours();
                if (hour >= 0 && hour <= 4) earned = true;
            }
            else if (badge.name === 'DSA Slayer') {
                if (user.dsaSolved >= 50) earned = true; // as per prompt
            }
        }

        if (earned) {
            user.badges.push(badge._id);
            newAwards.push(badge);
        }
    }

    if (newAwards.length > 0) {
        await user.save();

        // In a real system, we might trigger notificationSender here
        // notificationSender.notifyNewBadges(user, newAwards);
    }

    return newAwards; // array of newly earned badges
};

module.exports = {
    checkAndAwardBadges
};
