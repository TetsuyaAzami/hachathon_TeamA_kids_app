module.exports = {
  //RDS
  HOST: "database-1.ctehpoiq2jax.ap-northeast-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "M5kxenu7",
  DB: "my_db",
  dialect: "mysql",
  pool: {
    max: 5, //最大接続数
    min: 0, //最少接続数
    acquire: 30000, //接続を試みる最大時間
    idle: 10000// アイドル時間
  }
};