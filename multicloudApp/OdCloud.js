const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OdSvcsSchema = new Schema({
    odname: {
        type: String,
        required: true
    },
    odemail: {
        type: String,
        required: true
    },
    usermongoid: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("OdCloud", OdSvcsSchema);