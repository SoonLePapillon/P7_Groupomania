import { react } from "../db/dbconfig.js";

const reactionController = {
  react: async (req, res) => {
    const findReact = await react.findOne({
      // On cherche si l'utilisateur a déjà réagi à ce post
      where: {
        userId: req.auth.userId,
        postId: req.params.postId || req.body.postId,
      },
    });
    switch (findReact) {
      case null: // Dans le cas où il y avait aucune réaction
        try {
          // On créer une réaction
          const React = await react.create({
            userId: req.auth.userId,
            postId: req.params.postId || req.body.postId,
            value: req.body.value,
          });
          res.status(200).send(React);
        } catch (err) {
          res.status(400).send(err);
        }
        break;

      case findReact: // Dans le cas où l'utilisateur a déjà réagi
        if (req.auth.userId !== findReact.userId && req.auth.role === false) {
          // Si c'est quelqu'un d'autre (hors admin) qui essaie de modifier la réaction d'un autre utilisateur
          res.status(401).json({ message: "You can't change this reaction" }); // On lui interdit
        } else {
          // Si C'est le bon utilisateur
          if (findReact.value === req.body.value) {
            // S'il a déjà réagi et qu'il réagit à nouveau avec la mm réaction
            findReact.destroy(); // On la supprime
            res.status(200).json({ message: "Réaction supprimée" });
          } else if (findReact.value !== req.body.value) {
            // S'il change de réaction
            findReact.destroy(); // On supprime la réaction existante
            try {
              // Et on en créer une nouvelle
              const React = await react.create({
                userId: req.auth.userId,
                postId: req.params.postId || req.body.postId,
                value: req.body.value,
              });
              res.status(200).send(React);
            } catch (err) {
              res.status(400).send(err);
            }
          }
          break;
        }
    }
  },
};

export default reactionController;
