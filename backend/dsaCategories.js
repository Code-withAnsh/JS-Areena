const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/shivmanisingh/desi leetcode/backend/.env' });
const Problem = require('./models/Problem');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    try {
        const dsaCategories = await Problem.distinct("category", { type: 'DSA' });
        console.log("DSA Categories:", JSON.stringify(dsaCategories));
        
        const jsCategories = await Problem.distinct("category", { type: 'JS' });
        console.log("JS Categories:", JSON.stringify(jsCategories));
    } catch(e) { console.error("Error:", e); }
    process.exit(0);
})
.catch(err => {
    console.error("Connection Error:", err);
    process.exit(1);
});
