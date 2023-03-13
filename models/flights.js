const { DataTypes } = require('sequelize');
const db =require('../utils/db');


const Flights = db.define('flights', {
    id:{
        type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
    totalHrsOnAir : DataTypes.INTEGER,
    numOfSeats:DataTypes.INTEGER,
    initialAutoIncrement: 8000,
    timestamps: false

});
module.exports=Flights;