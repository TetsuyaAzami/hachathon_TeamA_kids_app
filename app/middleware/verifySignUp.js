const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

//重複確認
checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Usernameの重複確認
    // let user = await User.findOne({
    //   where: {
    //     username: req.body.username
    //   }
    // });
    // if(user) {
    //   return res.status(400).send({
    //     message: "Username is already in use"
    //   });
    // }
    // Emailの重複確認
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if(user) {
      return res.status(400).send({
        message: "Email is already in use"
      });
    }
    next();
  } catch(error) {
    return res.status(400).send({
      message: "Unable to Validate Username"
    });
  }
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;