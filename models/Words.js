let mongoose= require("mongoose");
let Schema = mongoose.Schema;

let wordsSchema = new Schema({
    
        word : {
            type:String,
            required: true,
            unique: {
                index : {unique : true}
            }
        },
        grammer:{
            type: String,
            required: true
        },
        meaning : {
            type: String,
            required: true
        },
        saved:{
            type:Boolean,
            default: false
        },
        createdDate:{
            type:Date,
            default: Date.now
        }
    
});

let Words = mongoose.model("Words",wordsSchema);
module.exports = Words;
