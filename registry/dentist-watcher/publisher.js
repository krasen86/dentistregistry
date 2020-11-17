const data = require("../dentist-data/dentists.json");
const {MQTT} = require("./mqttConnector")

class Publisher {
    constructor() {
    }
    publishToBroker() {
        MQTT.publish('dentists', JSON.stringify(data));
    }
}

module.exports.Publisher = Publisher;


