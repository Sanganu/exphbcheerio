let Words = require("../models/Words");

var words = {
    findAll: function(req,res) {
        console.log("controller Records fetch")
        Words.find({})
           .then((records) => {
               console.log(records);
               res.render("home",{words:records});
           }).catch((error) => {
            console.log(error);
            // return error;
        });
    },
    delete: function(req,res){
        Words.remove({_id:req.params.id})
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
        Words.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new : true})
           .then((result) => {
               console.log(result);
               res.json(result)
           })
           .catch((error) => {
            console.log(error);
            return error;
        })
    },
    create: function(req,res){
        Words.create(req.body)
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
       // console.log("Controller newrecords",data)
        Words.create(data)
          .then((result) => {
              console.log("word added",result)
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
