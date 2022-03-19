const controller = require("../controllers/users.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/point", controller.getPoint);
  app.post("/point", controller.addPoint);
};