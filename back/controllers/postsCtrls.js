import posts from '../models/postsModels.js';

const postController = {
    createOne: (req,res) => {
        const post = new posts({ 
            ...req.body,
         });
        post.save()
          .then(() => res.send(post))
          .catch((err) => res.status(400).send(err));
    },
    getOne: (req,res) => {
        //  posts.findById(req.params.id)
         .then((post) => {res.status(200).json(post)})
          .catch((err) => res.status(400).send(err));
    },
    getAll: (req,res) => {
    //    posts.find()
        .then((posts) => res.send(posts))
        .catch((err) => res.status(400).send(err)); 
    },
    deleteOne: (req,res) => {
    //    posts.findByIdAndDelete(req.params.id)
        .then(() => res.send("post Deleted"))
        .catch((err) => res.status(400).send(err)); 
    },
    updateOne: (req,res) => {
         posts.update({
            id : req.body.id,
            createdBy : req.body.createdBy,
            content: req.body.content,
            imageURL : req.body.imageURL
         })
        .then((post) => res.send(post + "\n Votre post a bien été mise à jour"))
        .catch((err) => res.status(400).send(err)); 
    },
}


export default postController;