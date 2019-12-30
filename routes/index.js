let routes = require("express").Router();
let  apiroutes = require("./apiroutes")
let viewroutes = require("./viewroutes");
router.use("/api",apiroutes)
router.use("/",viewroutes);
module.exports = router;
