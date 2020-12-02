const {MQTT} = require("./mqttConnector")
const fs = require("fs");
const variables = require("../config/variables")

class Publisher {
    constructor() {
    }
    publishToBroker() {
        fs.readFile('data/dentists.json', (err, data) => {
            MQTT.publish(variables.DENTIST_TOPIC, data.toString(), {retain:true});
            console.log('Published ' + variables.DENTIST_TOPIC)
        })
    }
}

module.exports.Publisher = Publisher;


