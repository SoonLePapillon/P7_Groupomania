import { post } from '../db/dbconfig.js' // sans les { } il ne reconnait pas posts car il n'a pas été exporté avec export default

const postController = {
    createOne: async (req,res) => {
        try {
            const Post = await post.create ({ 
                userId : req.auth.userId,
                content : req.body.content,
                imageUrl : req.body.imageUrl
            })
            res.status(200).send(Post)
        } catch (err) { 
            res.status(400).send(err)
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
//     updateOne: (req,res) => {
//         posts.update({
//            where: {
//                id : req.params.id
//            }
//         })
//        .then((post) => {
//        if (req.auth.userId !== req.body.createdBy) {
//         return res.status(401).json({message: 'vous ne pouvez pas modifier cette sauce'})
//        } 
//    },
    deleteOne: async (req,res) => {
        try {
            const Post = await post.destroy({ 
                where : {
                    id : req.params.id
                }
            })
            res.status(200).send(Post)
        } catch { 
            res.status(400)
        }
    }
}

export default postController;