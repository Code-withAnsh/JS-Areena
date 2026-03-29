const express = require('express');
const { getUserProfile, updateProfile, updateNotifications, getLeaderboard, getActivityMap } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/leaderboard', getLeaderboard);
router.put('/me', protect, updateProfile);
router.put('/notifications', protect, updateNotifications);
router.get('/me/activity', protect, getActivityMap);
router.get('/:username', getUserProfile);

module.exports = router;
