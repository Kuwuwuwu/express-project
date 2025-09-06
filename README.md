🔐 Express.js + Passport + MongoDB Atlas + CRUD + Агрегація
Цей проєкт реалізує:
• 	Локальну авторизацію через Passport.js
• 	Збереження сесій у cookies
• 	Захищений маршрут 
• 	Перемикач теми (light/dark) з cookie-збереженням
• 	MongoDB Atlas для зберігання, читання, оновлення та видалення даних
• 	Потокове читання через курсори
• 	Агрегаційні запити для статистики
• 	Pug-шаблони для рендерингу сторінок

⚙️ Технології
• 	Node.js, Express.js
• 	Passport.js ()
• 	express-session, cookie-parser
• 	bcrypt — хешування паролів
• 	MongoDB Atlas + Mongoose
• 	Pug — шаблони
• 	dotenv — змінні середовища

🚀 Запуск
npm install
npm run dev

Створіть .env у корені проєкту:

SESSION_SECRET=your_secret_key
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Замініть <username>, <password> та <dbname> на ваші дані MongoDB Atlas.

📁 Структура
express-project/
├── app.js
├── config/
│   ├── db.js
│   └── passport.js
├── middleware/
│   ├── auth.js
│   └── ensureAuthenticated.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── auth.js
│   ├── index.js
│   ├── theme.js
│   └── posts.js
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
•   POST /auth/register  — реєстрація
•   POST /auth/login — вхід
•   GET /auth/logout  — вихід
• 	Стратегія: passport-local (email + пароль)
• 	Паролі хешуються через bcrypt
• 	Сесії зберігаються у cookie (express-session)

🛡️ Захищений маршрут
• 	GET /protected  — доступ лише для авторизованих користувачів
• 	Middleware/ensureAuthenticated перевіряє сесію

🎨 Перемикач теми
- POST /theme — збереження теми в cookie
- views/index.pug — кнопки для перемикання
- theme.js — фронтенд-логіка

🗂️ CRUD-операції з MongoDB
• 	Модель Post (заголовок, вміст, автор)
• 	GET /posts — список постів
• 	POST /posts — створення поста
• 	PUT /posts/:id — оновлення поста
• 	DELETE /posts/:id — видалення поста
• 	Постійне підключення до MongoDB Atlas (config/db.js)
• 	Потокове читання постів через курсори
• 	Агрегація: статистика постів за авторами (GET /posts/stats)

📊 Розширені маршрути
• 	GET /posts/stats — агрегація: кількість постів за авторами
• 	GET /posts/stream — потокове читання постів через курсори














