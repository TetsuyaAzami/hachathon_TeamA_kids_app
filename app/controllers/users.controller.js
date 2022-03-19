const db = require("../models");
const User = db.User;
//ポイント取得
exports.getPoint = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: 1,
      },
    });
    return res.status(200).json([
      {
        point: user.point,
      },
    ]);
  } catch (error) {
    return res.status(500).json([
      {
        message: error.message,
      },
    ]);
  }
};

//ポイント追加
exports.addPoint = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: 1,
      },
    });
    console.log(req.body.point);
    user.point += req.body.point;
    user.update({
      point: user.point,
    });
    return res.status(200).json([
      {
        point: user.point,
      },
    ]);
  } catch (error) {
    return res.status(500).json([
      {
        message: error.message,
      },
    ]);
  }
};
