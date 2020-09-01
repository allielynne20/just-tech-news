// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });

const sequelize = new Sequelize('just_tech_news_db', 'root', '13308994tennis!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;