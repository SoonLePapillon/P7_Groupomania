import { react, post, sequelize } from "../db/sequelize.js";

const reactionController = {
  react: async (req, res) => {
    const findReact = await react.findOne({
      where: {
        userId: req.auth.userId,
        postId: req.body.postId,
      },
    });
    switch (findReact) {
      case null: // Dans le cas où il y avait aucune réaction
        try {
          const React = await react.create({
            userId: req.auth.userId,
            postId: req.body.postId,
          });
          res.status(200).send(React);
        } catch (err) {
          res.status(400).send(err);
        }
        break;

      case findReact: // Dans le cas où l'utilisateur a déjà réagi
        if (req.auth.userId !== findReact.userId) {
          res.status(401).json({ message: "Non autorisé." });
        } else {
          if (findReact.value === req.body.value) {
            // On reclique sur like
            findReact.destroy(); //
            res.status(200).json({ message: "Réaction supprimée" });
          }
          break;
        }
    }
  },
};

export default reactionController;
