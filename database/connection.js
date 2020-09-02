const mongoose = require('mongoose');

const isDisconnected = (instance) => instance.connection.readyState === 0;

async function connectDatabase() {
    try {
        const connString = global.__MONGO_URI__ || process.env.MONGO_CONN_STRING;

        if (!connString) {
            throw Error('Must set mongoConnString environment variable');
        }

        if (isDisconnected(mongoose)) {
            await mongoose.connect(connString, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                autoIndex: true,
            });
            console.info('Successfully connected to mongo db');
        } else {
            console.info('Already connected to mongo db: skipping');
        }
    } catch (error) {
        console.error(`Failed to connect to mongo DB: ${error}`);
        // exit with non-zero code will make docker/ Azure function to restart this service.
        process.exit(1);
    }
}
module.exports = { mongoose, connectDatabase };
