export const reactionModel = (sequelize, DataTypes) => {
  return sequelize.define("reaction", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
