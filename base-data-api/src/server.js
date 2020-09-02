const express = require('express');
const bodyParser = require('body-parser');
// const { connectDatabase } = require('../../database/connection');
const YieldController = require('./controllers/yieldController');

// connect to database
// connectDatabase();

// create express server
const app = express();

app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        return res.status(200).json({});
    }
    next();
});

// Add controllers and routing
const routes = express.Router();

const apiControllers = [new YieldController()];

for (const controller of apiControllers) {
    console.debug(`- Mounting Private Route - ${controller.constructor.name} at /api${controller.routePrefix}`);
    routes.use(controller.routePrefix, controller.router);
}

app.use('/api', routes);

module.exports = app;
