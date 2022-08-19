import { user } from "../db/dbconfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  signup: (req, res) => {
    bcrypt
      .hash(req.body.password, 10) // 10 tours de hashage
      .then((hash) => {
        const User = new user({
          email: req.body.email,
          password: hash,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          isAdmin: req.body.isAdmin,
        });
        User.save()
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
                .json({ error: "Mot de passe incorrect !" });
            } else {
              res.status(200).json({
                userId: user.id,
                userRole: user.isAdmin, // j'ai rajouté ça
                userName: user.firstName,
                token: jwt.sign(
                  { userId: user.id, userRole: user.isAdmin },
                  process.env.TOKEN,
                  { expiresIn: "1h" }
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

  // logout: (req,res) => {
  //     let token = req.auth.token;
  //     token = undefined;
  //     res.status(200).send("Logout" + token)
  //   }
};

export default userController;
