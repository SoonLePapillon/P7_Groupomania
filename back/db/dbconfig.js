import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import { postModel } from "../models/postModels.js";
import { userModel } from "../models/userModels.js";
import { reactionModel } from "../models/reactionModels.js";
import "dotenv/config";

/// Initialisation de la BDD avec l'ORM Sequelize
export const sequelize = new Sequelize(
  process.env.DB,
  process.env.UN,
  process.env.PASSWORD,
  {
    // host / groupomania et root dans le .env vu que ça peut changer
    dialect: "mysql",
    host: process.env.HOST,
  }
);

///// Création des modèles à l'aide de sequelize (et de paramètres)
export const user = userModel(sequelize, DataTypes);
export const post = postModel(sequelize, DataTypes);
export const react = reactionModel(sequelize, DataTypes);

///// Création des associations entre les tables
// Créer la foreignKey "createdBy" sur la table post - CHECK OK
user.hasMany(post, {
  foreignKey: "createdBy",
  onDelete: "CASCADE",
});
post.belongsTo(user, {
  foreignKey: "createdBy",
});

// Créer la foreignKey "postId" sur la table react - CHECK OK
post.hasMany(react, {
  onDelete: "CASCADE",
});
react.belongsTo(post);

// Créer la foreignKey "userId" sur la table react - CHECK OK
user.hasMany(react, {
  onDelete: "CASCADE",
});
react.belongsTo(user);

///// Synchronisation et mise à jour de la base de données
sequelize
  .sync()
  .then(() => {
    console.log("Connexion à la BDD réussie");
  })
  .catch((error) => console.log(error));
