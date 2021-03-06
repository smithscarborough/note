'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Archive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Archive.belongsTo(models.User);
      Archive.hasMany(models.Note)

    }
  };
  Archive.init({
    title: {
      type:DataTypes.STRING
    },
    public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Archive',
  });
  return Archive;
};