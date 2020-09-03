const consumeUpstreamData = require('./services/upstreamDataConsumer');

(async () => {
    await consumeUpstreamData();
})();