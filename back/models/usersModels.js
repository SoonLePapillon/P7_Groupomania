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
    // username : {
    //     type : DataTypes.STRING,
    //     allowNull : false,
    // },
    // avatar : {
    //     type : DataTypes.STRING,
    // },
    // role : {
    //     type : DataTypes.STRING,
    //     allowNull : false,
    // } 
});

export default users