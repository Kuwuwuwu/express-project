🔐 Express.js + Passport + MongoDB Atlas
Цей проєкт реалізує:
- Локальну авторизацію через Passport.js
- Збереження сесій у cookies
- Захищений маршрут /protected
- Перемикач теми (light/dark) з cookie-збереженням
- MongoDB Atlas для зберігання та читання даних
- Pug-шаблони для рендерингу сторінок
- Структуровану архітектуру для масштабування

⚙️ Технології
- Node.js, Express.js
- Passport.js (passport-local)
- express-session, cookie-parser
- bcrypt — хешування паролів
- MongoDB Atlas + Mongoose
- Pug — шаблони
- dotenv — змінні середовища

🚀 Запуск
npm install
npm run dev


Створіть .env у корені проєкту:

SESSION_SECRET=your_secret_key
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority



📁 Структура
express-project/
├── app.js
├── config/
│   ├── db.js               # Підключення до MongoDB Atlas
│   └── passport.js         # Конфігурація Passport
├── middleware/
│   ├── auth.js             # JWT middleware (опціонально)
│   └── ensureAuthenticated.js  # Passport middleware
├── models/
│   ├── User.js             # Модель користувача
│   └── Post.js             # Модель постів (MongoDB)
├── routes/
│   ├── auth.js             # Реєстрація, вхід, вихід
│   ├── index.js            # Головна сторінка + читання постів
│   └── theme.js            # Перемикач теми
├── views/
│   ├── index.pug
│   ├── login.pug
│   ├── register.pug
│   ├── protected.pug
│   └── layouts/
│       └── layout.pug
├── public/
│   ├── js/
│   │   └── theme.js
│   ├── css/
│   │   └── styles.css
│   └── favicon.ico
├── .env
└── README.md



🔑 Авторизація
- Реєстрація: POST /auth/register
- Вхід: POST /auth/login
- Вихід: GET /auth/logout
- Стратегія: passport-local (email + пароль)
- Паролі хешуються через bcrypt
- Після входу користувач доступний як req.user

🧠 Сесії
- Налаштовано express-session
- Сесія зберігається у cookie (httpOnly, secure)
- Passport серіалізує/десеріалізує користувача
- Доступ до req.user після входу

🛡️ Захищений маршрут
- GET /protected
- Middleware ensureAuthenticated перевіряє сесію
- Якщо користувач не авторизований — редирект на /auth/login

🎨 Перемикач теми
- Кнопки "Светлая" / "Тёмная"
- JS (theme.js) надсилає POST-запит на /theme
- Бекенд зберігає тему в cookie
- При завантаженні сторінки тема застосовується автоматично
- Стилі змінюються через клас body.light / body.dark

🗂️ MongoDB Atlas
- Підключено через mongoose.connect(process.env.MONGO_URI)
- Модель Post зберігає документи з title, content, createdAt
- Дані читаються через Post.find() і передаються в index.pug

🖼️ Pug-шаблони
- layout.pug — базовий каркас
- index.pug — головна сторінка з темою та постами
- login.pug / register.pug — форми авторизації
- protected.pug — захищена зона

