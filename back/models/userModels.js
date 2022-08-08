// Attention, c'est juste une fonction avec des paramètres, la création des tables se fait dans dbconfig.js

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
}