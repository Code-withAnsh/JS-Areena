const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true }, // Optional if using mobile or keep as secondary
    mobileNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },

    // Progress
    solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }],
    attemptedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }],
    totalSolved: { type: Number, default: 0 },
    easySolved: { type: Number, default: 0 },
    mediumSolved: { type: Number, default: 0 },
    hardSolved: { type: Number, default: 0 },
    dsaSolved: { type: Number, default: 0 },

    // Streak
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    lastActiveDate: { type: Date },
    activityMap: {
        type: Map,
        of: Number,
        default: {}
    }, // key = "YYYY-MM-DD", value = count

    // Badges
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],

    // Notifications
    notifications: {
        emailEnabled: { type: Boolean, default: false },
        whatsappEnabled: { type: Boolean, default: false },
        whatsappNumber: { type: String },
        reminderTime: { type: String, default: '20:00' },
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
