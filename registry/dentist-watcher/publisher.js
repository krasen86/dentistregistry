var data = require("../dentist-data/dentists.json");
var variables = require("../config/variables");
var mqtt = require('mqtt');
var client = mqtt.connect(variables.URL); //localhost

const publisher = {
    publishToBroker() {
        client.publish('dentists', JSON.stringify(data));
    }
}

exports.brokerPublisher = publisher;


