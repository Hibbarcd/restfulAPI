var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
    name: {
        type: String,
    // customer name must be unique
        unique: true
    },
    customers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }
    ]
});
var Library = mongoose.model("Library", LibrarySchema);
module.exports = Library;
