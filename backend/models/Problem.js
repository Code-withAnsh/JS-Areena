const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    problemId: { type: Number, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
    type: { type: String, enum: ['JS', 'DSA'] },
    category: { type: String },
    topicOrder: { type: Number },

    examples: [{
        input: String,
        output: String,
        explanation: String
    }],

    constraints: [{ type: String }],
    hints: [{ type: String }],

    starterCode: { type: String },
    testCases: [{
        input: { type: String }, // Stringified array of inputs
        expected: { type: String }, // Stringified output
        isHidden: { type: Boolean, default: false }
    }],

    solutionCode: { type: String },
    solutionExplanation: { type: String },

    tags: [{ type: String }],
    companies: [{ type: String }],

    acceptanceRate: { type: Number, default: 0 },
    totalAttempts: { type: Number, default: 0 },
    totalAccepted: { type: Number, default: 0 },

    isPremium: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Problem', problemSchema);
