📦 Express Theme Switcher
Проєкт на Express.js з підтримкою перемикання теми (світла/темна), збереженням вибору в cookie, Pug-шаблонами та фронтенд-скриптом без перезавантаження сторінки.

🚀 Запуск
npm install
npm run dev


Сервер запуститься на http://localhost:3000


📁 Структура
express-project/
├── app.js
├── routes/
│   └── theme.js
├── views/
│   ├── index.pug
│   └── layouts/
│       └── layout.pug
├── public/
│   ├── js/
│   │   └── theme.js
│   └── css/
│       └── style.css



🧠 Логіка теми
- Користувач натискає кнопку "Світла" або "Темна".
- JS (theme.js) надсилає POST-запит на /theme з вибраною темою.
- Бекенд (theme.js) зберігає тему в cookie.
- При наступному заході бекенд читає cookie і передає тему в шаблон.
- Pug-шаблон (layout.pug) вставляє клас теми в <body>, а CSS змінює фон.

🖼️ Pug-шаблони
layout.pug — базовий каркас:
doctype html

index.pug — контент сторінки:


🎨 CSS стилі
style.css:

🔐 Cookie
- Зберігається як theme=light або theme=dark
- Термін дії: 30 днів
- Доступний на фронтенді (httpOnly: false)

📌 Залежності
- express
- cookie-parser
- pug
- nodemon (для dev-режиму)
