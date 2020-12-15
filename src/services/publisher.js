const {MQTT} = require("./mqttConnector")
const fs = require("fs");
const variables = require("../config/variables")

class Publisher {
    constructor() {
    }
    publishToBroker() {
        let fileName = 'data/dentists.json'
        if (fs.existsSync(fileName)){
            fs.readFile('data/dentists.json', (err, data) => {
                if (data){
                    MQTT.publish(variables.DENTIST_TOPIC, data.toString(), {retain:true});
                    console.log('Published ' + variables.DENTIST_TOPIC)
                }
            })
        }
    }
}

module.exports.Publisher = Publisher;


