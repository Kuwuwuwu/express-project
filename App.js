import session from 'express-session';
import passport from 'passport';
import configurePassport from './config/passport.js';
import authRouter from './routes/auth.js';
import auth from './middleware/auth.js';


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

// Сесії та аутентифікація
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 7 * 24 * 3600 * 1000
  }
}));

app.use('/auth', authRouter);

app.get('/protected', auth, (req, res) => {
  res.render('protected', { user: req.user });
});

configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());



// Роутинг
app.use(themeRouter);

// Головна
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));