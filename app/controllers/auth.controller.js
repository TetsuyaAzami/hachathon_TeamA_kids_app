const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  //Userテーブルへ保存
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.json({ message: "ユーザー登録に成功しました" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "ユーザーが見つかりません" });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).json({
        message: "パスワードが間違っています",
      });
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24時間
    });
    req.session.token = token;
    return res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).json({
      message: "サインアウトしました"
    });
  } catch (err) {
    this.next(err);
  }
};