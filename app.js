const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const session = require('express-session');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use


app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Home Route
app.get('/', (req, res) => {
  res.render('welcome');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});