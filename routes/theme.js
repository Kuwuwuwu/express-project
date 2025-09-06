import { Router } from 'express';
const router = Router();

router.post('/theme', (req, res) => {
  const { theme } = req.body || {};
  if (!theme) return res.status(400).json({ error: 'theme is required' });

  res.cookie('theme', theme, {
    maxAge: 30 * 24 * 3600 * 1000, // 30 днів
    httpOnly: false,
    sameSite: 'lax'
  });

  res.json({ success: true });
});

export default router;

