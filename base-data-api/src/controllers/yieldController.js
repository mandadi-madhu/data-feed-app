const express = require('express');
const yieldRepository = require('../../../database/repositories');

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
        const newRecord = await new yieldRepository().saveYield(payload);

        res.status(201).json({
            message: 'Successfully saved Yield data',
            data: newRecord
        });
    }

    listYield(req, res) {
        const records = await new yieldRepository().getYield();
        res.status(200).json({
            message: 'Successfully read Yield data',
            data = records
        });
    }
}
module.exports = YieldController;
