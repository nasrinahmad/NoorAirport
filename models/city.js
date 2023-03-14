const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const City = db.define('city', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
}, {
    initialAutoIncrement: 8000,
    timestamps: false
});
module.exports = City;