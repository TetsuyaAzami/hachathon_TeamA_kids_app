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

    const updatedPoint = user.point + parseInt(req.body.point, 10);
    user.update({
      point: updatedPoint,
    });
    return res.status(200).json([
      {
        point: updatedPoint,
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
