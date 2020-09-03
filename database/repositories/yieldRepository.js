const model = require('../models/yield');

class YieldRepository {
    async saveYield(payload) {
        console.info('saving yield..');
        const newDoc = await new model(payload).save();
        return newDoc;
    }

    async getYield() {
        const yieldRecords = await model.find().select({}).exec();
        return yieldRecords;
    }
}
module.exports = YieldRepository;
