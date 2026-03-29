const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/shivmanisingh/desi leetcode/backend/.env' });
const Problem = require('./models/Problem');
mongoose.connect(process.env.MONGODB_URI).then(async () => {
    const p = await Problem.findOne({ title: /DSA/ });
    console.log(p ? p.type : 'not found');
    process.exit(0);
});
