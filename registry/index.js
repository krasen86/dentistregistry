var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1"); //localhost

client.on('connect', function () {
    client.publish('test', "Hello");
})






