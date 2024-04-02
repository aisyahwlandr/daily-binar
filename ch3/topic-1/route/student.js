const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");
const { route } = require("./student");

/* Add routes */
// router.get("/", studentController.getStudents); // /students
// router.get("/:id", studentController.getStudent); // /students/:id
// router.post("/", studentController.addStudent);
// router.put("/:id", studentController.putStudent); // /students/:id
// router.delete("/:id", studentController.deleteStudent); // /students/:id

router
    .route("/")
    .get(studentController.getStudents)
    .post(studentController.addStudent);

router
    .route("/:id")
    .get(studentController.getStudent)
    .put(studentController.putStudent)
    .delete(studentController.deleteStudent);

module.exports = router;