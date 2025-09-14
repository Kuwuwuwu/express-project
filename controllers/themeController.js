import ThemePreference from "../models/ThemePreference.js";

export async function getTheme(req, res, next) {
  try {
    const pref = await ThemePreference.findOne({ userId: req.cookies.userId });
    res.locals.theme = pref?.theme ?? "light";
    next();
  } catch (err) {
    next(err);
  }
}

export async function setTheme(req, res, next) {
  try {
    const { theme } = req.body;
    await ThemePreference.findOneAndUpdate(
      { userId: req.cookies.userId },
      { theme, updatedAt: Date.now() },
      { upsert: true, new: true }
    );
    res.cookie("theme", theme, { maxAge: 30*24*60*60*1000 });
    res.redirect("back");
  } catch (err) {
    next(err);
  }
}