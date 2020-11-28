const {Publisher} = require( "./publisher");
const fs = require("fs");

class Watcher {
    constructor() {
    }
    watch() {
        fs.watchFile('./data/dentists.json', () => {
            let publisher = new Publisher();
            publisher.publishToBroker();
        })
    }
}

module.exports.Watcher = Watcher;