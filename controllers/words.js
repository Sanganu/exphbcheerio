let db = require("../models");

var words = {
    findAll: function(req,res) {
        console.log("controller Records fetch")
        db.Words.find({}).sort({ createdDate:-1})
           .then((records) => {
               //console.log(records);
               res.render("home",{words:records});
           })
           .catch((error) => {
            console.log(error);
            return error;
        });
    },
    delete: function(req,res){
        db.Words.remove({_id:req.params.id})
           .then((result) => {
               console.log(result);
               res.json(result)
           })
           .catch((error) => {
            console.log(error);
            return error;
        });
    },
    update: function(req,res){
        db.Words.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new : true})
           .then((result) => {
               console.log(result);
               res.json(result)
           })
           .catch((error) => {
            console.log(error);
            return error;
        })
    },
    insert: function(req,res){
        db.Words.create(req.body)
           .then((result) => {
                console.log(result);
               res.json(result)
           })
           .catch((error) => {
            console.log(error);
            return error;
        })
    },
    newrecords: function(data){
        db.Words.create(data)
          .then((result) => {
              console.log(result)
              return result
          })
          .catch((error) => {
              let errcode = (error.errmsg).substr(0,6);
              if( errcode === "E11000")
              {
                  console.log("Word already exist")
              }
              else {
                console.log(error);
              }
  
              return error;
          })
    }
}

module.exports = words;
