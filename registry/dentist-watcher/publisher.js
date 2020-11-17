const data = require("../dentist-data/dentists.json");
const {MQTT} = require("./mqttConnector")

const publisher = {
    publishToBroker() {
        MQTT.publish('dentists', JSON.stringify(data));
    }
}

exports.brokerPublisher = publisher;


