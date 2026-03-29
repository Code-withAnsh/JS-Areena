require('dotenv').config({ path: __dirname + '/../.env' });
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Badge = require('../models/Badge');

const badges = [
    // STREAK
    { name: 'First Flame', description: 'Achieve a 3-day streak', condition: 'streak', value: 3, rarity: 'Common' },
    { name: 'Week Warrior', description: 'Achieve a 7-day streak', condition: 'streak', value: 7, rarity: 'Rare' },
    { name: 'Fortnight Fighter', description: 'Achieve a 14-day streak', condition: 'streak', value: 14, rarity: 'Rare' },
    { name: 'Monthly Master', description: 'Achieve a 30-day streak', condition: 'streak', value: 30, rarity: 'Epic' },
    { name: 'Century Streak', description: 'Achieve a 100-day streak', condition: 'streak', value: 100, rarity: 'Legendary' },

    // SOLVED COUNT
    { name: 'Hello World', description: 'Solve your first problem', condition: 'solved_count', value: 1, rarity: 'Common' },
    { name: 'Warming Up', description: 'Solve 10 problems', condition: 'solved_count', value: 10, rarity: 'Common' },
    { name: 'On a Roll', description: 'Solve 25 problems', condition: 'solved_count', value: 25, rarity: 'Rare' },
    { name: 'Century Club', description: 'Solve 100 problems', condition: 'solved_count', value: 100, rarity: 'Epic' },
    { name: 'JSArena Legend', description: 'Solve 300 problems', condition: 'solved_count', value: 300, rarity: 'Legendary' },

    // DIFFICULTY
    { name: 'Hard Mode', description: 'Solve 10 Hard problems', condition: 'difficulty_count', value: { difficulty: 'Hard', count: 10 }, rarity: 'Epic' },
    { name: 'DSA Slayer', description: 'Solve 50 DSA problems', condition: 'special', value: null, rarity: 'Epic' },

    // CATEGORY
    { name: 'Closure King', description: 'Complete all Closures problems', condition: 'category_complete', value: 'Closures', rarity: 'Rare' },
    { name: 'Async Ace', description: 'Complete all Async/Await problems', condition: 'category_complete', value: 'Async/Await', rarity: 'Rare' },
    { name: 'DOM Destroyer', description: 'Complete all DOM problems', condition: 'category_complete', value: 'DOM', rarity: 'Rare' },
    { name: 'Array Architect', description: 'Complete all Arrays problems', condition: 'category_complete', value: 'Arrays', rarity: 'Rare' },

    // SPECIAL
    { name: 'Night Owl', description: 'Submit an accepted solution between 12 AM and 4 AM', condition: 'special', value: null, rarity: 'Common' },
    { name: 'Speed Demon', description: 'Solve a Hard problem in under 10 minutes', condition: 'special', value: null, rarity: 'Epic' },
    { name: 'Perfectionist', description: 'Submit code and get Accepted on first try', condition: 'special', value: null, rarity: 'Rare' },
];

const seedBadges = async () => {
    try {
        await connectDB();
        await Badge.deleteMany(); // Clear existing
        await Badge.insertMany(badges);
        console.log('Badges seeded successfully!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedBadges();
