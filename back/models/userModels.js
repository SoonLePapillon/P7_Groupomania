// Attention, c'est juste une fonction avec des paramètres, la création des tables se fait dans dbconfig.js
import 'dotenv/config';

export const userModel = (sequelize, DataTypes) => { // it's paramaters here
    return sequelize.define('users', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
            validate : {
                is: /.+\@.+\..+/
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        },
        firstName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        avatar : {
            type : DataTypes.STRING
        },
        isAdmin : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        }
    });
}