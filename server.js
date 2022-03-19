const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

app.use(cors());
app.use(express.static("dist"));

//Content-type application/jsonに対応
app.use(express.json());
//Content-type application/x-www-form-urlencodedに対応
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "kidsapp-session",
    //Cookieの値に署名(keys:["key1","key2"] key[0])
    secret: "KIDS_APP_SECRET_KEY",
    httpOnly: true,
  })
);

//ルーティング
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Kids App" });
});

//routes
require("./app/routes/auth.routes")(app);
require("./app/routes/courses.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
