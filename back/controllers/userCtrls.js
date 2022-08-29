import { user } from "../db/sequelize.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  signup: (req, res) => {
    bcrypt
      .hash(req.body.password, 10) // 10 tours de hashage
      .then((hash) => {
        user
          .create({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            isAdmin: req.body.isAdmin,
          })
          .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
          .catch(() =>
            res.status(500).json({
              message:
                "Une erreur est survenue lors de la création de votre compte.",
            })
          );
      })
      .catch(() =>
        res.status(500).json({ message: "Une erreur est survenue." })
      );
  },
  login: (req, res) => {
    user
      .findOne({
        where: {
          email: req.body.email,
        },
      }) // pour trouver l'user, s'il existe
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: "Utilisateur non trouvé !" });
        }
        bcrypt
          .compare(req.body.password, user.password) // on compare le mdp qu'a saisi l'user au hash présent dans le bdd
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ error: "Utilisateur non trouvé !" }); // Et non mot de passe incorrect (donne l'info comme quoi une adresse mail est liée | pas sécurisé)
            } else {
              res.status(200).json({
                userId: user.id,
                isAdmin: user.isAdmin,
                userName: `${user.firstName} ${user.lastName}`,
                token: jwt.sign(
                  { userId: user.id, isAdmin: user.isAdmin },
                  process.env.TOKEN,
                  { expiresIn: "3h" }
                ),
              });
            }
          })
          .catch(() =>
            res.status(500).json({ message: "Une erreur est survenue." })
          );
      })
      .catch(() =>
        res.status(500).json({ message: "Une erreur est survenue." })
      );
  },
};

export default userController;
