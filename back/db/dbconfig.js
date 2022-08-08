import { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
import { postModel } from '../models/postModels.js'
import { userModel } from '../models/userModels.js';
import 'dotenv/config'

export const sequelize = new Sequelize (process.env.DB, process.env.UN, process.env.PASSWORD, { // host / groupomania et root dans le .env vu que ça peut changer
    dialect : 'mysql', 
    host : process.env.HOST
}) 

/// Création des modèles à l'aide de paramètres
export const user = userModel(sequelize, DataTypes);
export const post = postModel(sequelize, DataTypes);

/// Création des associations entre les tables
user.hasMany(post);
post.belongsTo(user);

// Synchronisation et mise à jour de la base de données
sequelize.sync({ alter : true }) 
.then(() => {
    console.log("Connexion à la BDD réussie")
}).catch (
    error => console.log(error)
)
