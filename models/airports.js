const { DataTypes } = require('sequelize');
const db =require('../utils/db');


const Airports = db.define('airports', {
    id:{
        type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
    name: DataTypes.STRING,
    initialAutoIncrement: 1000,
    timestamps: false
});
module.exports=Airports;