import express from 'express';
import postController from '../controllers/postsCtrls.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/getAll', auth, postController.getAll);
router.get('/getOne/:id', auth, postController.getOne);
router.post('/createOne', auth, postController.createOne);
router.put('/updateOne/:id', auth, postController.updateOne);
router.delete('/deleteOne/:id', auth, postController.deleteOne);

export default router;