require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
    origin: function (origin, callback) {
        callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

// Set up general API rate limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window`
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', apiLimiter);

// Serve Static Frontend Layouts (if accessible from root directory)
app.use(express.static(path.join(__dirname, '..')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/problems', require('./routes/problems'));
app.use('/api/submissions', require('./routes/submissions'));
app.use('/api/users', require('./routes/users'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/admin', require('./routes/admin'));

// Admin Seeding Logic
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const seedAdmin = async () => {
    try {
        const adminUser = await User.findOne({ username: 'Ansh' });
        if (!adminUser) {
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash('Ansh@9670', salt);
            await User.create({
                username: 'Ansh',
                mobileNumber: '7379685052',
                password: hashedPassword,
                role: 'admin'
            });
            console.log('Admin user seeded (Ansh)');
        } else if (adminUser.role !== 'admin') {
            adminUser.role = 'admin';
            await adminUser.save();
            console.log('User Ansh promoted to admin');
        }
    } catch (err) {
        console.error('Admin seeding error:', err);
    }
};
seedAdmin();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
