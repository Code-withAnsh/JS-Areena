const express = require('express');
const router = express.Router();
const { getAllUsers, updateUserPassword, createProblem, deleteUser } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.use(protect);
router.use(admin);

router.get('/users', getAllUsers);
router.put('/users/:id/password', updateUserPassword);
router.delete('/users/:id', deleteUser);
router.post('/problems', createProblem);

module.exports = router;
