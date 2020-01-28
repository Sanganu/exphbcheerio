const Practice = require("../models/Practice");

const practice = {
    findAll: function(){
        Practice.find({}.populate("wordid").sort({createdDate:-1}))
        .then((records) => {
            return records;
        })
        .catch((error)=> {
            console.log(`Error in fetching words ${error}`);
            return error;
        })
    },
    create:function(req,res){
        console.log("pract contro")
        Practice.create(req.body)
        .then((result) => {
            res.json(result)
        })
        .catch((error)=> {
            console.log(`Error in Inserting word ${error}`);
            return error;
        })  
    },
    update:function(req,res){
        Practice.findOneAndUpdate({_id:req.params.id},
        {$set:req.body})
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            return error;
        })
    },
    delete: function(req,res){
        Practice.remove({_id:req.params.id})
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            return error;
        })
    }
}
module.exports = practice;