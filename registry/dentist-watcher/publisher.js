const data = require("../dentist-data/dentists.json");
const variables = require("../config/variables");
const mqtt = require('mqtt');
const client = mqtt.connect(variables.URL); //localhost

const publisher = {
    publishToBroker() {
        client.publish('dentists', JSON.stringify(data));
    }
}

exports.brokerPublisher = publisher;


