var publisher = require( "../dentist-watcher/publisher");
const fs = require("fs");

const watcher = {
    watch() {
        fs.watchFile('./dentist-data/dentists.json', () => {
            publisher.brokerPublisher.publishToBroker();
        })
    }
}

exports.fileWatcher = watcher;