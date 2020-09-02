const yieldModel = require('../../../database/models/yield');

class YieldDataService {
    async createYield(payload) {
        const newDoc = await new yieldModel(payload).save();
        return newDoc;
    }
}
module.exports = YieldDataService;
