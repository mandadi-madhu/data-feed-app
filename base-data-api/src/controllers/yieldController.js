const express = require('express');
const dbService = require('../dbServices/yieldService');

class YieldController {
    constructor() {
        this.routePrefix = '/yield';
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/', this.saveYield);

        this.router.get('/', this.listYield);
    }

    // POST
    saveYield(req, res) {
        const payload = { ...req.body };
        const newRecord = await new dbService().createYield(payload);

        res.status(201).json({
            message: 'Successfully saved Yield data',
            data: newRecord
        });
    }

    listYield(req, res) {
        res.status(201).json({
            message: 'Successfully read Yield data'
        });
    }
}
module.exports = YieldController;
