import {DataTypes} from 'sequelize'
import db from '../db/dbconfig.js'


const users = db.define('users', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    }
});

export default users