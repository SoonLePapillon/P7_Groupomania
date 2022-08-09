import { like } from '../db/dbconfig.js'
import { post } from '../db/dbconfig.js'

const likeController = {
    like: async (req,res) => {
        if (post.likedBy.includes(req.auth.userId)) {
            like.destroy()
            index = post.likedBy.indexOf(req.auth.userId);
            post.likedBy.splice(index, 1);
            post.likes--;
        } else {
            try {
                const Like = await like.create ({ 
                    userId : req.auth.userId,
                    postId : req.params.postId || req.body.postId,
                })
                    post.likedBy.push(req.auth.userId)
                    post.likes++
                    res.status(200).send(Like)
            } catch (err) { 
                res.status(400).send(err)
            }
        }
    }
}

export default likeController;