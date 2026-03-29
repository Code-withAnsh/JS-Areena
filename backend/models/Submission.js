const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
    code: { type: String, required: true },
    language: { type: String, default: 'javascript' },
    status: {
        type: String,
        enum: ['Accepted', 'Wrong Answer', 'Runtime Error', 'Time Limit Exceeded', 'AI Verified'],
        required: true
    },
    aiVerdict: { type: String }, // Explanation from AI
    runtime: { type: Number }, // in ms
    memory: { type: Number }, // in KB
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
