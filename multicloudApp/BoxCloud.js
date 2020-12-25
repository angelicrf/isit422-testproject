const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoxSvcsSchema = new Schema({
    bxname: {
        type: String,
        required: true
    },
    bxemail: {
        type: String,
        required: true
    },
    usermongoid: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("BoxCloud", BoxSvcsSchema);