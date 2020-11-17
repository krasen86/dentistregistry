const publisher = require( "./dentist-watcher/publisher");
const watcher = require("./dentist-watcher/watcher");
const {MQTT} = require("./dentist-watcher/mqttConnector")

MQTT.on('connect', function () {
   publisher.brokerPublisher.publishToBroker();
   watcher.fileWatcher.watch();
})






