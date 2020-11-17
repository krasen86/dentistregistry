const {MQTT} = require("./mqttConnector")
const fs = require("fs");

class Publisher {
    constructor() {
    }
    publishToBroker() {
        fs.readFile('dentist-data/dentists.json', (err, data) => {
            MQTT.publish('dentists', data.toString());
        })
    }
}

module.exports.Publisher = Publisher;


