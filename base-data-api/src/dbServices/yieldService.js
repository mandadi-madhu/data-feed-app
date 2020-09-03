const yieldModel = require('../../../database/models/yield');

class YieldDataService {
    async createYield(payload) {
        const newDoc = await new yieldModel(payload).save();
        return newDoc;
    }

    async getYieldData() {
        const records = await new yieldModel().find({}).exec();
    }
}
module.exports = YieldDataService;
