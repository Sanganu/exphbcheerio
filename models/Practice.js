const mongoose = require("mongoose")
const Schema = mongoose.Schema

const practiceschema = new Schema({
    wordid:{
        type: Schema.Types.ObjectId,
        ref:"Words"
    },
    sentence1:{
        type:String
    },
    sentence2: {
        type:String
    },
    sentence3: {
        type:String
    }
})

let Practice = mongoose.model("Practice",practiceschema);
module.exports = Practice;
