var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/spellscrapper"

mongoose.connect(MONGODB_URI,{useNewUrlParser : true},() => {
    console.log(`Mongo db connected ${MONGODB_URI}`);
   
});

module.exports = mongoose;


