import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    user: req.user || null,
    theme: res.locals.theme
  });
});

export default router;