var router = require("express").Router();
var db = require("../models");
var wordscontrollers = require("../controllers/words");

router.get("/",function(req,res){
    console.log("router home")
    wordscontrollers.findAll(req,res),((records) =>{
    res.render("home",{words:records})
    })
})

module.exports = router;