import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
import { postModel } from '../models/postModels.js'
import { userModel } from '../models/userModels.js';
import { likeModel } from '../models/likeModels.js';
import 'dotenv/config'

/// Initialisation de la BDD avec l'ORM Sequelize
export const sequelize = new Sequelize (process.env.DB, process.env.UN, process.env.PASSWORD, { // host / groupomania et root dans le .env vu que ça peut changer
    dialect : 'mysql', 
    host : process.env.HOST
}) 

///// Création des modèles à l'aide de sequelize (et de paramètres)
export const user = userModel(sequelize, DataTypes);
export const post = postModel(sequelize, DataTypes);
export const like = likeModel(sequelize, DataTypes);

///// Création des associations entre les tables
// Créer la foreignKey "userId" sur la table post
user.hasMany(post);
post.belongsTo(user);

// Créer la foreignKey "postId" sur la table like
post.hasMany(like, {
    onDelete: 'CASCADE'
});
like.belongsTo(post);

// Créer la foreignKey "userId" sur la table like
user.hasMany(like);
like.belongsTo(user);


///// Synchronisation et mise à jour de la base de données
sequelize.sync({ alter : true }) 
.then(() => {
    console.log("Connexion à la BDD réussie")
}).catch (
    error => console.log(error)
)
