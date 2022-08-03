import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import users from '../models/usersModels.js';

const userController = {
    signup: (req,res) => {
        bcrypt.hash(req.body.password, 10) // 10 tours de hashage
        .then(hash => {
          const user = new users({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username ? req.body.username : `${req.body.firstName} ${req.body.lastName}`,
            avatar : req.body.avatar ? req.body.avar : `unfichieravecunePPpardéfaut`,
            admin : req.body.admin
          });
          user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch((error) => {
              res.status(500).json({
                message : "Une erreur est survenue lors de la création de votre compte."
              });
            });
        })
        .catch((error) => {
          res.status(500).json({
            message : "Une erreur est survenue."
          });
        });
    },
    login: (req,res) => {
        users.findOne({ email: req.body.email }) // pour trouver l'user, s'il existe
        .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
          }
          bcrypt.compare(req.body.password, user.password) // on compare le mdp qu'a saisi l'user au hash présent dans le bdd
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              res.status(200).json({ 
                userId: user._id,
                token: jwt.sign(
                  {userId: user._id},
                  process.env.TOKEN,
                  { expiresIn: "24h"}
                )
              });
            })
            .catch((error) => {
              res.status(500).json({
                message : "Une erreur est survenue."
              });
            });
        })
        .catch((error) => {
          res.status(500).json({
            message : "Une erreur est survenue."
          });
        });
    },
    logout: (req,res) => {
      if (req.session) {
        req.session.destroy(err => {
            if (err) {
              res.status(400).send('Unable to log out')
            } else {
              res.send('Logout successful')
            }
          });
      }
  }
}
    
export default userController;