const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CloudSvcsSchema = new Schema({
    gdname: {
        type: String,
        required: true
    },
    gdemail: {
        type: String,
        required: true
    },
    usermongoid: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("MCCloud", CloudSvcsSchema);
