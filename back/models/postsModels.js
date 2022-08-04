import {DataTypes} from 'sequelize'
import db from '../db/dbconfig.js'


const posts = db.define('posts', {
    // ça sert à rien de créer un ID, sequelize le fait déjà par défaut
    createdBy : {
        type : DataTypes.STRING,
        allowNull : false
    },
    content : {
        type : DataTypes.TEXT,
    },
    imageUrl : {
        type : DataTypes.STRING,
        // allowNull : true est déjà par défaut
    }
});

// posts.sync();

export default posts 