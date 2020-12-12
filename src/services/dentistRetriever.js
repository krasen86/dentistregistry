const axios = require("axios");
const {DataProcessor} = require("./dataProcessor");

class DentistRetriever {
    getDentists() {
        axios.get("https://raw.githubusercontent.com/feldob/dit355_2020/master/dentists.json").then(dentists => {
            let dataProcessor = new DataProcessor();
            dataProcessor.checkDataForChanges(dentists.data);
        })
    }
}
module.exports.DentistRetriever = DentistRetriever;

