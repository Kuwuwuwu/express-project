<<<<<<< HEAD
# React + TypeScript + Vite
=======
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
>>>>>>> origin/feature1

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

<<<<<<< HEAD
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
=======
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







>>>>>>> origin/feature1

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

<<<<<<< HEAD
```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
>>>>>>> origin/feature1

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

<<<<<<< HEAD
```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======


>>>>>>> origin/feature1
