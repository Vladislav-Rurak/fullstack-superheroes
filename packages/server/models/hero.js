'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    static associate (models) {}
  }
  hero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originDescription: DataTypes.STRING,
      catchPhrase: DataTypes.STRING,
      image: DataTypes.STRING,
      isGood: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: 'Hero',
      tableName: 'heroes',
      underscored: true,
    }
  );
  return hero;
};
