export default function ensureAuthenticated(req, res, next) {
  // Перевіряємо, чи Passport додав метод isAuthenticated
  if (typeof req.isAuthenticated === "function" && req.isAuthenticated()) {
    return next();
  }

  // Для HTML-запитів робимо редирект на сторінку логіну
  if (req.accepts("html")) {
    // Можна додати flash-повідомлення:
    // req.flash("error", "Будь ласка, увійдіть у систему");
    return res.redirect("/auth/login");
  }

  // Для API-викликів повертаємо JSON з помилкою
  return res.status(401).json({ error: "Unauthorized" });
}