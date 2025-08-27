const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const requestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const incrementCounter = (counterName, labels = {}) => {
  const counter = new client.Counter({ name: counterName, help: counterName });
  counter.inc(labels);
};

module.exports = {
  client,
  requestDuration,
  incrementCounter
};
