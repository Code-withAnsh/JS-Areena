const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/shivmanisingh/desi leetcode/backend/.env' });
const Problem = require('./models/Problem');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    try {
        const categories = await Problem.distinct("category");
        console.log("Here are the categories:", JSON.stringify(categories));
    } catch(e) { console.error("Error:", e); }
    process.exit(0);
})
.catch(err => {
    console.error("Connection Error:", err);
    process.exit(1);
});
