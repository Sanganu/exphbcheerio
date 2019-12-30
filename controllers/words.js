let db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Words.find({}).sort({ createdDate:-1})
           .then((records) => {
               console.log(records);
               res.json(records)
           });
    },
    delete: function(req,res){
        db.Words.remove({_id:req.params.id})
           .then((result) => {
               console.log(result);
               res.json(result)
           });
    },
    update: function(req,res){
        db.Words.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new : true})
           .then((result) => {
               console.log(result);
               res.json(result)
           })
    },
    insert: function(req,res){
        db.Words.create(req.body)
           .then((result) => {
                console.log(result);
               res.json(result)
           })
    },
    newrecords: function(data){
        db.Words.create(data)
          .then((result) => {
              console.log(result)
              return result
          })
          .catch((error) => {
              console.log(error);
              return error;
          })
    }
}