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
         post.findById(req.params.id)
          .then((post) => res.send(post))
          .catch((err) => res.status(400).send(err));
    },
    getAll: (req,res) => {
       post.find()
        .then((posts) => res.send(posts))
        .catch((err) => res.status(400).send(err)); 
    },
    deleteOne: (req,res) => {
       post.findByIdAndDelete(req.params.id)
        .then(() => res.send("post Deleted"))
        .catch((err) => res.status(400).send(err)); 
    },
    updateOne: (req,res) => {
         post.findByIdAndUpdate(req.params.id,{ ...req.body })
        .then((post) => res.send(post + "\n Votre post a bien été mise à jour"))
        .catch((err) => res.status(400).send(err)); 
    },
}


export default postController;