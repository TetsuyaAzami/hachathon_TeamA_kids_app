module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "tf20200127",
  DB: "kids_app_db",
  dialect: "mysql",
  pool: {
    max: 5, //最大接続数
    min: 0, //最少接続数
    acquire: 30000, //接続を試みる最大時間
    idle: 10000// アイドル時間
  }
};