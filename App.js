import connectDB from './config/db.js';
await connectDB();
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';

import configurePassport from './config/passport.js';
import authRouter from './routes/auth.js';
import themeRouter from './routes/theme.js';
import indexRouter from './routes/index.js';
import ensureAuthenticated from './middleware/ensureAuthenticated.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();

//
// 🔧 Middleware
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // true у продакшн через HTTPS
    maxAge: 7 * 24 * 3600 * 1000
  }
}));

configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//
// 🎨 Тема з cookie
//
app.use((req, res, next) => {
  res.locals.theme = req.cookies?.theme ?? 'light';
  next();
});

//
// 📁 Статика
//
app.use('/public', express.static(path.join(__dirname, 'public')));

//
// 🖼️ Шаблони
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//
// 🚦 Роутинг
//
app.use('/', indexRouter);           // Головна сторінка
app.use('/auth', authRouter);        // Реєстрація, вхід, вихід
app.use(themeRouter);                // Перемикач теми

//
// 🔐 Захищений маршрут
//
app.get('/protected', ensureAuthenticated, (req, res) => {
  res.render('protected', { user: req.user });
});

//
// 🚀 Старт
//
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});