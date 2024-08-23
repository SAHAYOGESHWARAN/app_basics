const express = require('express');
const passport = require('passport');
const {
  registerUser,
  loginUser,
  verifyEmail,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-email', verifyEmail);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
