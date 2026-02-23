const { Sequelize } = require('sequelize');

// Option2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password'
const sequelize = new Sequelize('test1', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
}); 


let connectDB = async(req, res) => {
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

module.exports = connectDB;