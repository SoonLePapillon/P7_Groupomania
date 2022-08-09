import express from 'express';
import likeController from '../controllers/likeCtrls.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// CRUD // 
router.post('/like', auth, likeController.createOne);

export default router;