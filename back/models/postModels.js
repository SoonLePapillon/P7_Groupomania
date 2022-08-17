// Attention, c'est juste une fonction avec des paramètres, la création des tables se fait dans dbconfig.js

export const postModel = (sequelize, DataTypes) => {
  return sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      // allowNull : true est déjà par défaut
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  });
};
