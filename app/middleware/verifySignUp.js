const db = require("../models");
const User = db.user;

//重複確認
let checkDuplicateEmail = async (req, res, next) => {
  try {
    // Emailの重複確認
    let email = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (email) {
      console.log(email);
      return res.status(400).send([
        {
          message: "違うメールアドレスを入力してね",
        },
      ]);
    }
    next();
  } catch (error) {
    return res.status(400).send([
      {
        message: "メールアドレスを正しく入力してね",
      },
    ]);
  }
};

const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;
