import {DataTypes} from 'sequelize'
import db from '../db/dbconfig.js'


const posts = db.define('posts', {
    // ça sert à rien de créer un ID, sequelize le fait déjà par défaut
    content : {
        type : DataTypes.TEXT,
    },
    imageURL : {
        type : DataTypes.STRING,
        // allowNull : true est déjà par défaut
    }
});

export default posts 