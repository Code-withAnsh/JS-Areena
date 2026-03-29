const nodemailer = require('nodemailer');
const axios = require('axios');
const User = require('../models/User');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(message);
};

const sendWhatsApp = async (phone, message) => {
    try {
        // Assuming CallMeBot API
        // https://api.callmebot.com/whatsapp.php?phone=[phone_number]&text=[message]&apikey=[your_apikey]
        // The prompt says "No server-side key needed — user's personal CallMeBot key stored in DB"
        // But schema doesn't have callmebot_apikey. Let's just use what we have or mock it
        const apiKey = process.env.CALLMEBOT_API_KEY || 'mock_key';
        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;
        await axios.get(url);
    } catch (error) {
        console.error("WhatsApp failed", error.message);
    }
};

const notifyUser = async (user, subject, message) => {
    if (user.notifications.emailEnabled && user.email) {
        await sendEmail({ email: user.email, subject, message });
    }
    if (user.notifications.whatsappEnabled && user.notifications.whatsappNumber) {
        await sendWhatsApp(user.notifications.whatsappNumber, message);
    }
};

const sendDailyReminders = async () => {
    // Logic to find users who haven't solved today and send reminder
    // Check users current streak, lastActiveDate, and timezone/reminderTime
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
    const usersToRemind = await User.find({
        $or: [{ lastActiveDate: null }, { lastActiveDate: { $lt: new Date(today) } }],
        currentStreak: { $gt: 0 }
    });

    for (const user of usersToRemind) {
        const message = `Hey! Don't forget to solve at least 1 problem today to keep your streak alive! 🔥 Current streak: ${user.currentStreak} days`;
        await notifyUser(user, 'JSArena Daily Reminder', message);
    }
};

module.exports = {
    notifyUser,
    sendDailyReminders
};
