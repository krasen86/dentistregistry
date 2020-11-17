const {Publisher} = require( "./dentist-watcher/publisher");
const {Watcher} = require("./dentist-watcher/watcher");
const {MQTT} = require("./dentist-watcher/mqttConnector")

MQTT.on('connect', function () {
   let publisher = new Publisher();
   publisher.publishToBroker();
   let watcher = new Watcher();
   watcher.watch();
})






