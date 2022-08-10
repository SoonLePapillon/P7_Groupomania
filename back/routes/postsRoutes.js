import express from 'express';
import postController from '../controllers/postCtrls.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/createOne', auth, postController.createOne);
router.get('/getAll', auth, postController.getAll);
router.get('/getOne/:id', auth, postController.getOne);
router.put('/updateOne/:id', postController.updateOne);
router.delete('/deleteOne/:id', auth, postController.deleteOne);

export default router;