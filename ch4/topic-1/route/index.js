const express = require("express");
const router = express.Router();
const classes = require("./class");
const students = require("./student");


router.use("/classes", classes);
router.use("/students", students);


module.exports = router;
