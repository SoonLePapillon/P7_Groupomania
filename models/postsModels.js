import {DataTypes} from 'sequelize'
import db from '../db/dbconfig.js'


const posts = db.define('posts', {
    id : {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        primaryKey : true,
        allowNull: false,
        unique : true
    },
    texte : {
        type : DataTypes.TEXT,
        allowNull : false,
    },
    image : {
        type : DataTypes.STRING,
        // allowNull : true est déjà par défaut
    }
});

export default posts 