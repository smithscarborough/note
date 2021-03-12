'use strict';
// const { userInfo } = require('node:os');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.User)
      Note.belongsTo(models.Archive)
    }
  };
  Note.init({
    noteMessage: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};