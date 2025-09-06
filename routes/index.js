import { Router } from 'express';
import Post from '../models/Post.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    res.render('index', {
      user: req.user || null,
      theme: res.locals.theme,
      posts
    });
  } catch (err) {
    res.status(500).send('Помилка при завантаженні даних');
  }
});

export default router;