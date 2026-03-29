require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Problem = require('../models/Problem');

const clearAllProblems = async () => {
    try {
        await connectDB();
        console.log('Database connected.');
        
        const countBefore = await Problem.countDocuments();
        console.log(`Current problem count: ${countBefore}`);
        
        const result = await Problem.deleteMany({});
        console.log(`Successfully deleted ${result.deletedCount} problems.`);
        
        const countAfter = await Problem.countDocuments();
        console.log(`Problem count after deletion: ${countAfter}`);
        
        process.exit(0);
    } catch (err) {
        console.error('Error clearing problems:', err.message);
        process.exit(1);
    }
};

clearAllProblems();
