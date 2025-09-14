import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // verify throws, якщо токен невалідний або прострочений
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    
    // за бажанням: витягнути userId і підвантажити юзера з БД
    // req.user = await User.findById(payload.id).lean();
    req.user = payload;
    
    return next();
  } catch (err) {
    const message = err.name === "TokenExpiredError"
      ? "Token expired"
      : "Invalid token";
    return res.status(401).json({ error: message });
  }
}