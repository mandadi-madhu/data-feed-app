const readCSV = require('../utilities/readCSV');
const path = require('path');

const sourceNammes = ['yield.csv'];

const consumeUpstreamData = async () => {
    for (const csv of sourceNammes) {
        const filePath = path.join(__dirname, '../../csv/', csv);

        const rawData = await readCSV(filePath);
        console.dir(rawData);
    }
};
module.exports = consumeUpstreamData;
