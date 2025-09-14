// app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import Post from "./models/Post.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. View engine (Pug)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// 2. Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 3. Підключення до MongoDB
await connectDB();

// 4. Маршрути
app.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find().lean();
    res.render("index", {
      title: "Головна",
      theme: res.locals.theme,
      posts,
      user: req.user
    });
  } catch (err) {
    next(err);
  }
});

// ... інші маршрути auth, posts тощо ...

// 5. Запуск сервера (повинен бути **поза** маршрутом)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});