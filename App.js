import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import themeRouter from './routes/theme.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __dirname = path.resolve();

// Парсери
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Прокидуємо тему в шаблони
app.use((req, res, next) => {
  res.locals.theme = req.cookies?.theme ?? 'light';
  next();
});

// Статика
app.use('/public', express.static(path.join(__dirname, 'public')));

// PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Роутинг
app.use(themeRouter);

// Головна
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));