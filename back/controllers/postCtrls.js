import { post } from '../db/dbconfig.js' // sans les { } il ne reconnait pas posts car il n'a pas été exporté avec export default

const postController = {
    createOne: async (req,res) => {
        if (req.body.content === null && req.body.imageURL === null) {
            res.status(400).json({message : "Votre post ne peut pas être vide, merci d'indiquer ."})
        } else {
                try {
                    const Post = await post.create ({ 
                        userId : req.auth.userId,
                        content : req.body.content,
                        imageUrl : req.body.imageUrl,
                        createdBy : req.auth.userId
                    })
                    res.status(200).send(Post)
                } catch (err) { 
                    res.status(400).send(err)
                }
            }
        },
    getOne: async (req,res) => {
        try {
            const Post = await post.findOne({ 
                where : { 
                    id : req.params.id
                }
            })
            res.status(200).send(Post)
        } catch { 
            res.status(400)
        }
    },
    getAll: async (req,res) => {
        try {
            let allPosts = []
            allPosts = await post.findAll({
                order: [
                    ['createdAt', 'DESC'] // pour affichier du plus récent au moins récent
                ]
            })
            res.status(200).send(allPosts)
        } catch { 
            res.status(400)
        }
    },
    updateOne: async (req,res) => {
        const Post = await post.findOne({ 
            where : { 
                id : req.params.id
            }
        })
        if (req.auth.userId !== Post.createdBy && req.auth.role === false) {
            res.status(401).json({ message : "You can't delete this post"})
        } else {
            try {
                Post.update()
                res.status(200).send(Post)
        } catch (err) {
                res.status(400).send(err)
            } 
        }
    },
    deleteOne: async (req,res) => {
        const Post = await post.findOne({ 
            where : { 
                id : req.params.id
            }
        })
        if (req.auth.userId !== Post.createdBy && req.auth.role === false) {
            res.status(401).json({ message : "You can't delete this post"})
        } else {
            try {
                Post.destroy()
                res.status(200).json({ message : "Post deleted"})
            } catch (err) { 
                res.status(400).send(err);
            }
        }
    }
}

export default postController;