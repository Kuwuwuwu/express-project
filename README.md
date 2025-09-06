🔐 Express.js Авторизація + Перемикач Теми
Проєкт на Node.js та Express.js з реалізацією:
- Локальної авторизації через Passport.js
- Збереження сесій у cookies
- Захищеного маршруту /protected
- Перемикача теми (light/dark) з cookie-збереженням
- Pug-шаблонів для сторінок

⚙️ Технології
- Node.js, Express.js
- Passport.js + passport-local
- express-session, cookie-parser
- bcrypt — хешування паролів
- Pug — шаблони
- dotenv — змінні середовища

🚀 Запуск
npm install
npm run dev


Створіть .env у корені проєкту:

SESSION_SECRET=your_secret_key



📁 Структура
express-auth-project/
├── app.js
├── config/           # Passport конфігурація
├── middleware/       # Захист маршрутів
├── models/           # Модель користувача
├── routes/           # Авторизація + тема
├── views/            # Pug-шаблони
├── public/           # CSS + JS
├── .env
└── README.md



🔑 Авторизація
- Реєстрація: POST /auth/register
- Вхід: POST /auth/login
- Вихід: GET /auth/logout
- Використовується стратегія passport-local з email + пароль
- Паролі хешуються через bcrypt

🧠 Сесії
- Налаштовано express-session
- Сесія зберігається у cookie (httpOnly, secure)
- Passport серіалізує/десеріалізує користувача
- Доступ до req.user після входу

🛡️ Захищений маршрут
- GET /protected
- Доступ лише для авторизованих користувачів
- Middleware ensureAuthenticated перевіряє сесію

🎨 Перемикач теми
- Кнопки "Светлая" / "Тёмная"
- JS (theme.js) надсилає POST-запит на /theme
- Бекенд зберігає тему в cookie
- При завантаженні сторінки тема застосовується автоматично
- Стилі змінюються через клас body.light / body.dark

🖼️ Pug-шаблони
- layout.pug — базовий каркас
- index.pug — головна сторінка з перемикачем теми
- login.pug / register.pug — форми авторизації
- protected.pug — захищена зона
