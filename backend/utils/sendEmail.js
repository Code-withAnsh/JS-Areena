const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // Check if email is configured
    if (!process.env.EMAIL_USER || process.env.EMAIL_USER.includes('your_platform_email')) {
        console.warn('Email is not configured in .env. Falling back to console log.');
        console.log(`[EMAIL MOCK] To: ${options.email}`);
        console.log(`[EMAIL MOCK] Subject: ${options.subject}`);
        console.log(`[EMAIL MOCK] Message: ${options.message}`);
        return;
    }

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `JSArena <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        html: options.message
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
