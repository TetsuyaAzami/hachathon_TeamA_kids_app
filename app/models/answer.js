'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Quiz }) {
      // define association here
      this.belongsTo(Quiz, { foreignKey: 'quizId' })
    }
  }
  Answer.init({
    answer: DataTypes.STRING,
    is_answer: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'answers',
    modelName: 'Answer',
  });
  return Answer;
};