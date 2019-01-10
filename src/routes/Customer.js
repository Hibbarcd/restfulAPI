var mongoose = require("mongoose");

let Schema = mongoose.Schema;
let CustomerSchema = new Schema({
    first: String,
    last: String,
});

let Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;