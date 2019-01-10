let express = require("express");
let router = express.Router();

router.get('/person', (req, res) => {
   res.send("you have requested a person");
});

module.exports = personRoute;