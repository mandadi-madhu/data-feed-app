const readCSV = require('../utilities/readCSV');
const path = require('path');
const yieldRepository = require('../../../database/repositories/yieldRepository');

const consumeYieldUpstream = async () => {
    const filePath = path.join(__dirname, '../../csv/yield.csv');
    const rawData = await readCSV(filePath);

    if (rawData && rawData.length > 0) {
        for (const record of rawData) {
            try {
                await new yieldRepository().saveYield(record);
            } catch (err) {
                console.warn('Failed to save a yield record');
            }
        }
        console.dir(rawData);
    }
};
module.exports = consumeYieldUpstream;
