var data = require("../dentist-data/dentists.json");
var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1"); //localhost

const publisher = {
    publishToBroker() {
        client.publish('dentists', JSON.stringify(data));
    }
}

exports.brokerPublisher = publisher;


