import jwt from 'jsonwebtoken';

export default function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('No token');

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).send('Invalid token');
  }
}

export default function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/login');
}