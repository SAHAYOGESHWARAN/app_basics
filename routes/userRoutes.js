const express = require('express');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/dashboard', protect, (req, res) => {
  res.render('dashboard', { user: req.user });
});

router.get('/welcome', (req, res) => {
  res.render('welcome');
});

module.exports = router;
