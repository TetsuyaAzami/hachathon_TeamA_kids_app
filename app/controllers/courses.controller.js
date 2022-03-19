const db = require("../models");

exports.getAllCourses = async (req, res) => { 
  // Sequelizeのモデルを使ってデータを取得する
  await db.Course.findAll({
      
      attributes: {
          exclude: ['createdAt', 'updatedAt']
      },
      
  }).then(courses => {

      if (!courses) {
          console.log("クイズデータを取得できませんでした");
          res.send('Error');
      } else {
          res.json(courses);
      }
  });
}

exports.getCourse = async (req, res) => {
  const courseId = req.params.courseId;

  // Sequelizeのモデルを使ってデータを取得する
  await db.Quiz.findAll({
      where: {
          course_id: courseId
      },
      attributes: {
          exclude: ['createdAt', 'updatedAt']
      },
      include: [{
          model: db.Answer,
          attributes: {exclude: ['createdAt', 'updatedAt']}, 
      }],       
  }).then(quizzes => {

      if (!quizzes) {
          console.log("クイズデータを取得できませんでした");
          res.send('Error');
      } else {
          res.json(quizzes);
      }
  });
}

