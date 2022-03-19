'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Answer }) {
      // define association here
      this.hasMany(Answer, { foreignKey: 'quizId'})
    }
  }
  Quiz.init({
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }, {
    sequelize,
    tableName: 'quizzes',
    modelName: 'Quiz',
  });
  return Quiz;
};