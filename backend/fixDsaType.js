const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/shivmanisingh/desi leetcode/backend/.env' });
const Problem = require('./models/Problem');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    try {
        const result = await Problem.updateMany(
            { title: { $regex: /^DSA/ } },
            { $set: { type: 'DSA' } }
        );
        console.log(`Updated ${result.modifiedCount} DSA problems.`);
    } catch(e) { console.error("Error:", e); }
    process.exit(0);
})
.catch(err => {
    console.error("Connection Error:", err);
    process.exit(1);
});
