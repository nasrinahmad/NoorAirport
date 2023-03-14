const { DataTypes } = require('sequelize');
const db = require('../utils/db');


const CustomerInfo = db.define('customerInfo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lname: DataTypes.STRING,
    fname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
}, {
    initialAutoIncrement: 8000,
    timestamps: false
});
module.exports = CustomerInfo;