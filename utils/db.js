const { Sequelize } = require('sequelize');


const db = new Sequelize({
    database: 'noorAirport',
    username: 'root',
    password: '123456789',
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = db;