const {DentistRetriever} = require("./services/dentistRetriever");
const {Watcher} = require("./services/watcher");
const {Publisher} = require( "./services/publisher");
const {MQTT} = require("./services/mqttConnector")

MQTT.on('connect', function () {
   let retriever = new DentistRetriever();
   retriever.getDentists();
   setInterval(retriever.getDentists, 600000);
   let publisher = new Publisher();
   publisher.publishToBroker();
   let watcher = new Watcher();
   watcher.watch();
});






