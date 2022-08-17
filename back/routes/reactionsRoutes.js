import express from "express";
import reactionController from "../controllers/reactionCtrls.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/:postId/reactions", auth, reactionController.react); // attention à bien mettre le postId ici et non pas dans app.js car le controller est exploité ici

export default router;
