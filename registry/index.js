var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1"); //localhost
var publisher = require( "./dentist-watcher/publisher");
var watcher = require("./dentist-watcher/watcher");

client.on('connect', function () {
   publisher.brokerPublisher.publishToBroker();
   watcher.fileWatcher.watch();
})






