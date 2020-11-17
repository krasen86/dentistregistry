const mqtt = require('mqtt');
const publisher = require( "./dentist-watcher/publisher");
const watcher = require("./dentist-watcher/watcher");
const variables = require('./config/variables')

const client = mqtt.connect(variables.URL);

client.on('connect', function () {
   publisher.brokerPublisher.publishToBroker();
   watcher.fileWatcher.watch();
})






