const User = require('../models/User');

/**
 * getDayString returns 'YYYY-MM-DD' variant in Asia/Kolkata timezone.
 */
const getDayString = (date) => {
    return new Date(date).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
};

const updateStreak = async (userId) => {
    const user = await User.findById(userId);
    if (!user) return;

    const now = new Date();
    const todayStr = getDayString(now);
    const lastActiveStr = user.lastActiveDate ? getDayString(user.lastActiveDate) : null;

    if (lastActiveStr === todayStr) {
        // Already counted today
        return;
    }

    // Yesterday in IST
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const yesterdayStr = getDayString(yesterday);

    if (lastActiveStr === yesterdayStr) {
        // Streak continues
        user.currentStreak += 1;
    } else {
        // Streak broken or first time, start fresh
        user.currentStreak = 1;
    }

    if (user.currentStreak > user.longestStreak) {
        user.longestStreak = user.currentStreak;
    }

    user.lastActiveDate = now;
    await user.save();
};

const resetBrokenStreaks = async () => {
    /** 
     * To be called by a cron job (ideally every 1-6 hours).
     * Logic: If Today is March 22 IST, anyone whose lastActiveDate was on 
     * March 20 IST or earlier has failed to maintain their streak on March 21.
     */
    const now = new Date();
    const todayStr = getDayString(now);

    // Yesterday in IST
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const yesterdayStr = getDayString(yesterday);

    // Calculate the UTC boundary for "Start of Yesterday IST"
    // Midnight IST is 18:30 UTC of previous day.
    // However, it's safer to just iterate users with currentStreak > 0
    // and check their string-based lastActiveDate.

    const users = await User.find({ currentStreak: { $gt: 0 } });

    for (const user of users) {
        if (!user.lastActiveDate) {
            user.currentStreak = 0;
            await user.save();
            continue;
        }

        const userLastStr = getDayString(user.lastActiveDate);

        // If last active was NOT today AND not yesterday, the streak is dead.
        if (userLastStr !== todayStr && userLastStr !== yesterdayStr) {
            user.currentStreak = 0;
            await user.save();
            console.log(`Reset streak for user ${user.username} (Last active: ${userLastStr})`);
        }
    }
};

module.exports = {
    updateStreak,
    resetBrokenStreaks
};
