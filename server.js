const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

app.use(cors());
//Content-type application/jsonに対応
app.use(express.json());
//Content-type application/x-www-form-urlencodedに対応
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "kidsapp-session",
    secret: "COOKIE_SECRET",
    httpOnly: true
  })
);

//db
const db = require("./app/models");
// const Role = db.role;

//本番
//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Resync Database");
  // initial();
});

//ルーティング
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Kids App"});
});

//routes
require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
