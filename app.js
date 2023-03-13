const express = require('express');
const app= express();
//const bodyParser= require('body-parser');

const db=require('./utils/db');

const Airports = require('./models/airports');
const City = require('./models/city');
const CustomerInfo = require('./models/customerInfo');
const Flights = require('./models/flights');
const State = require('./models/state');



//routes



//relationship
//one(state) to many City
State.hasMany(City);
City.belongsTo(State);

City.hasMany(Airports);
Airports.belongsTo(City);

Airports.hasMany(Flights);
Flights.belongsTo(Airports);

//many to many relationship
Flights.belongsToMany(CustomerInfo, { through: 'tickets'});
CustomerInfo.belongsToMany(Flights, { through: 'tickets'});

db.sync({ alter: true})
    .then(() => {
        app.listen(8080);
    })
    .catch(error => {
        console.log(error);
    })






//app.use(bodyParser.json());
