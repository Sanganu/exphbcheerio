var router = require("express").Router();
var wordscontrollers = require("../controllers/words");

router.get("/all",wordscontrollers.findAll)
router.delete("/:id",wordscontrollers.delete)
router.put("/:id",wordscontrollers.update)
router.post("/",wordscontrollers.insert)

module.exports = router;
