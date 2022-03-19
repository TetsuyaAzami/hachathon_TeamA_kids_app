const controller = require("../controllers/courses.controller.js");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/courses", controller.getAllCourses);
  app.get("/course/:courseId", controller.getCourse);
};