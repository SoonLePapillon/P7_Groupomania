import express from 'express';
import userCtrl from '../controllers/usersCtrls.js';

const router = express.Router();

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

export default router;