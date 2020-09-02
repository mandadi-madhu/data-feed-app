const fs = require('fs');
const csv = require('csv-streamify');

const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const csvData = [];
        const parser = csv({ columns: true });

        // now pipe some data into it
        fs.createReadStream(filePath)
            .pipe(parser)
            .on('error', (err) => reject(err))
            .on('data', (line) => {
                csvData.push(line);
            })
            .on('end', () => resolve(csvData));
    });
};
module.exports = readCSV;
