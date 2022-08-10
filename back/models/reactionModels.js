export const reactionModel = (sequelize, DataTypes) => { 
    return sequelize.define('reactions', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        },
        value : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    });
}