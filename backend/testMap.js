const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    try {
        const user = await User.findOne({});
        console.log("Username:", user.username);
        console.log("Raw ActivityMap:", user.activityMap);
        const obj = user.toObject();
        console.log("Converted object:", obj.activityMap);
    } catch(e) { console.error("Error:", e); }
    process.exit(0);
})
.catch(err => {
    console.error("Connection Error:", err);
    process.exit(1);
});
