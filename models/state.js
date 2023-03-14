const { DataTypes } = require('sequelize');
const db = require('../utils/db');


const State = db.define('state', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
}, {
    initialAutoIncrement: 5000,
    timestamps: false
});
module.exports = State;