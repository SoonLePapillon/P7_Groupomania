import posts from '../models/postsModels.js';

const postController = {
    createOne: (req,res) => {
        const post = posts.create ({ 
            createdBy : req.auth.userId,
            content : req.body.content,
            imageUrl : req.body.imageUrl
         })
          .then((post) => res.send(post))
          .catch((err) => res.status(400).send(err));
    },
    getOne: (req,res) => {
        posts.findOne({ 
            where : { 
                id : req.params.id
            }
        })
        .then((post) => {res.status(200).json(post)})
        .catch((err) => res.status(400).send(err));
    },
    getAll: (req,res) => {
       posts.findAll()
        .then(() => res.send(posts))
        .catch((err) => res.status(400).send(err)); 
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
    deleteOne: (req,res) => {
        posts.destroy({ 
            where : {
                id : req.params.id
            }})
        .then((post) => res.send("Post Deleted"))
        .catch((err) => res.status(400).send(err)); 
    }
}


export default postController;