import { Router } from 'express';
import passport from 'passport';
import User from '../models/User.js';


const router = Router();

router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existing = User.findByEmail(email);
  if (existing) return res.redirect('/auth/login');
  const user = await User.create({ email, password });
  req.login(user, err => {
    if (err) return res.redirect('/auth/login');
    res.redirect('/protected');
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/protected',
  failureRedirect: '/auth/login'
}));

router.get('/logout', (req, res) => {
  req.logout(() => res.redirect('/'));
});

export default router;

