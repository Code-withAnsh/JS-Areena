const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    icon: { type: String },
    condition: {
        type: String,
        enum: ['streak', 'solved_count', 'category_complete', 'first_solve', 'difficulty_count', 'special'],
        required: true
    },
    value: { type: mongoose.Schema.Types.Mixed }, // Number or String based on condition
    rarity: {
        type: String,
        enum: ['Common', 'Rare', 'Epic', 'Legendary'],
        default: 'Common'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Badge', badgeSchema);
