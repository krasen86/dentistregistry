const fs = require("fs");
const _ = require("lodash");

class DataProcessor {
    constructor() {
    }
    checkDataForChanges(data) {
        let fileName = './data/dentists.json';
        if (fs.existsSync(fileName)){
            let dentistsList = this.readData(fileName);
            dentistsList.then(stored => {
                let storedDentists = JSON.parse(stored);
                if (!_.isEqual(storedDentists, data)) {
                    this.writeData(data);
                }
            })
        }
        else {
            this.writeData(data);
        }
    }
    writeData(data) {
        let fileName = './data/dentists.json';
        try {
            if (fs.existsSync(fileName)) {
                let dentistData = this.readData(fileName);
                dentistData.then(() => {
                    fs.writeFileSync(fileName, JSON.stringify(data));
                })
            } else {
                if (!fs.existsSync("data")){
                    fs.mkdirSync("data");
                }
                fs.writeFileSync(fileName, JSON.stringify(data));
            }
        } catch(err) {
            console.error(err);
        }
    }
    readData(file) {
        let fileName = file;
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, readData) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve( readData);
                }
            })
        })
    }
}
module.exports.DataProcessor = DataProcessor