import express from 'express';
import userCtrl from '../controllers/userCtrls.js';
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
// router.post('/logout', auth, userCtrl.logout);



export default router;