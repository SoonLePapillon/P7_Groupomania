import {DataTypes} from 'sequelize'
import db from '../db/dbconfig.js'


const users = db.define('users', {
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    firstName : {
        type : DataTypes.STRING,
        allowNull : true, 
    },
    lastName : {
        type : DataTypes.STRING,
        allowNull : true, 
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false, 
    },
    avatar : {
        type : DataTypes.STRING,
        allowNull : true, 
    },
    admin : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : false,
    } 
});

// users.sync();

export default users