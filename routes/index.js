let router = require("express").Router();
// let  apiroutes = require("./apiroutes")
// let viewroutes = require("./viewroutes");
// let db = require("../models");
let wordscontrollers = require("../controllers/words");

// router.use("/api",apiroutes)
// router.use("/",viewroutes);


router.get("/",(req,res) => {

     let records = wordscontrollers.findAll(req,res)
        console.log("Records",records);
        //res.render("home",{words:records});
});






module.exports = router;
