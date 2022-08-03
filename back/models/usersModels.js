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
        allowNull : true, // à changer pour false
    },
    lastName : {
        type : DataTypes.STRING,
        allowNull : true, // à changer pour false
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false, // à changer pour false
    },
    avatar : {
        type : DataTypes.STRING,
        allowNull : true, // à changer pour false
    },
    admin : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : false,
    } 
});

users.sync();

export default users