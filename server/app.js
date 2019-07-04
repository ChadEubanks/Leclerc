const bodyParser = require('body-parser');
const express = require('express');

/** configurations **/
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/** routes **/
const circuitsController  = require('./circuits_controller.js');
app.get('/api/circuits', circuitsController.get);

const constructorResultsController  = require('./constructor_results_controller.js');
app.get('/api/constructor-results', constructorResultsController.get);

const constructorStandingsController  = require('./constructor_standings_controller.js');
app.get('/api/constructor-standings', constructorStandingsController.get);

const constructorsController  = require('./constructors_controller.js');
app.get('/api/constructors', constructorsController.get);

const driverStandingsController  = require('./driver_standings_controller.js');
app.get('/api/driver-standings', driverStandingsController.get);

const driversController  = require('./drivers_controller.js');
app.get('/api/drivers', driversController.get);

const lapTimesController  = require('./lap_times_controller.js');
app.get('/api/lap-times', lapTimesController.get);

const pitStopsController  = require('./pit_stops_controller.js');
app.get('/api/pit-stops', pitStopsController.get);

const qualifyingController  = require('./qualifying_controller.js');
app.get('/api/qualifying', qualifyingController.get);

const racesController  = require('./races_controller.js');
app.get('/api/races', racesController.get);

const resultsController  = require('./results_controller.js');
app.get('/api/results', resultsController.get);

const seasonsController  = require('./seasons_controller.js');
app.get('/api/seasons', seasonsController.get);

const statusController  = require('./status_controller.js');
app.get('/api/status', statusController.get);

/** server **/
app.listen(process.env.SERVER_PORT || 3001, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT || 3001}!`);
});
