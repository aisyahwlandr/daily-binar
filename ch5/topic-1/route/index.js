const express = require("express");
const router = express.Router();
const auth = require("./auth");
const classes = require("./class");
const students = require("./student");

router.use("/auth", auth);
router.use("/classes", classes);
router.use("/students", students);


module.exports = router;
