export const likeModel = (sequelize, DataTypes) => { 
    return sequelize.define('likes', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        }
    });
}