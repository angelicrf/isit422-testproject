const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MongoUsersSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model("MongoUsers", MongoUsersSchema);