let express = require("express");
let logger = require("morgan");
let mongoose = require("mongoose");

var db = require("./models");

const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static('public'))

// Mongo DB ================================
mongoose.connect("mongodb://localhost/customerLibrary", { useNewUrlParser: true });

// ROUTES ==============================================
db.Library.create(req.body)
    .then(function(dbLibrary) {
        console.log(dbLibrary);
    })
    .catch(function(err) {
        console.log(err.message);
    });
//========================================================
app.post("/submit", function(req, res) {
    db.Customer.create(req.body)
    .then(function(dbCustomer) {
        console.log(dbCustomer)
            return db.Library.findOneAndUpdate({}, { $push: { customers: dbCustomer_id } }, { new: true});
    })
    .then(function(res) {
        res.json(dbLibrary);
    })
    .catch(function(err) {
        res.json(err);
    });
});
//==========================================================
app.get("/customer", function(req, res) {
    db.Library.find({})
    .then(function(dbCustomer) {
        res.json(dbCustomer);
    })
    .catch(function(err) {
        res.json(err);
    });
});
//===============================================================
app.get("/library", function(req,res) {
    db.Library.find({})
    .then(function(dbLibrary) {
        res.json(dbLibrary);
    })
    .catch(function(err) {
        res.json(err);
    });
});
//=============================================================
    //Start the Server
    app.listen(PORT, () => 
        console.info(`Server has started on ${PORT}`));