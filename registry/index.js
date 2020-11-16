var mqtt = require('mqtt');
var publisher = require( "./dentist-watcher/publisher");
var watcher = require("./dentist-watcher/watcher");
var variables = require('./config/variables')

var client = mqtt.connect(variables.URL);

client.on('connect', function () {
   publisher.brokerPublisher.publishToBroker();
   watcher.fileWatcher.watch();
})






