let router = require("express").Router();

let wordscontrollers = require("../controllers/words");
let practicecontroller = require("../controllers/practice")
// let  apiroutes = require("./apiroutes")
// let viewroutes = require("./viewroutes");
// let db = require("../models");
// router.use("/api",apiroutes)
// router.use("/",viewroutes);



//Words
router.get("/",(req,res) => {

     let records = wordscontrollers.findAll(req,res)
        //console.log("Records",records);
        //res.render("home",{words:records});
});

//Practice
router.post("/saved/word",(req,res) =>{
     
    practicecontroller.create(req,res)
})




module.exports = router;
