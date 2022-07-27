import express from 'express';
import postController from '../controllers/postsCtrls.js';
import userController from '../controllers/usersCtrls.js';

const router = express.Router();

router.get('/getAll', postController.getAll);
router.get('/getOne/:id', postController.getOne);
router.post('/createOne', postController.createOne);
router.put('/updateOne/:id', postController.updateOne);
router.delete('/deleteOne/:id', postController.deleteOne);

router.post('/signup', userController.signup);
router.post('/login', userController.login);

export default router;