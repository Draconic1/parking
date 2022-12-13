module.exports = {
  HOST: "localhost",
  USER: "polina",
  PASSWORD: "1234",
  DB: "parking",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
