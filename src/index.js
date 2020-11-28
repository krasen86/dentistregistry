const {Publisher} = require( "./services/publisher");
const {Watcher} = require("./services/watcher");
const {MQTT} = require("./services/mqttConnector")

MQTT.on('connect', function () {
   let publisher = new Publisher();
   publisher.publishToBroker();
   let watcher = new Watcher();
   watcher.watch();
})






