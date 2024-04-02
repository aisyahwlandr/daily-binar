require("dotenv").config(); //enable dotenv
const express = require("express");
// const { student, classes } = require("./models");
const fileUpload = require("express-fileupload");
const route = require("./route");

const app = express();
const port = 4000;

app.use(express.json()); // body -> json
app.use (
    fileUpload({
        useTempFiles: true,
    })
); // body -> form-data
app.use(express.static("public"));
app.use("/api", route);


/* app.get("/classes/:id", async (req, res) => {
    const { id } = req.params;

    const data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });

    res.status(200).json({
        message: "Successs",
        data,
    });
}); */

/* app.get("/students", async (req, res) => {
    const data = await student.findAll({
        include: {
            model: classes,
        },
    });

    res.status(200).json({
        message: "Success",
        data,
    });
}); */

/* app.post("/classes", async (req, res) => {
    // validate the request from user
    const { name } = req.body;
    if (!name || name == "") {
        return res.status(400).json({
            data: null,
            message: "Name must be filled!",
        });
    }

    // Process insert data
    const newClass = await classes.create({ name });

    res.status(201).json({
        data: newClass,
        message: "Class created successfully",
    });
}); */

/* app.post("/students", async (req, res) => {
    // validate the request from user
    const { name, class_id, photo } = req.body;
    if (!name || name == "") {
        return res.status(400).json({
            data: null,
            message: "Name must be filled!",
        });
    }
    if (!class_id || class_id == "") {
        return res.status(400).json({
            data: null,
            message: "Class_id must be filled!",
        });
    }

    // Process insert data
    const newStudent = await student.create({ name, class_id, photo });

    // Retrieve the inserted data with associated classes
    const insertedStudent = await student.findByPk(newStudent.id, {
        include: {
            model: classes,
        },
    });

    res.status(201).json({
        data: insertedStudent,
        message: null,
    });
}); */

/* app.put("/classes/:id", async (req, res) => {
        const { name } = req.body;
        if (!name || name === "") {
            return res.status(400).json({
                data: null,
                message: "Name must be filled!",
            });
        }

        const id = req.params.id;
        // Find the class by primary key
        const updatedClass = await classes.findByPk(id);
        // Update class name
        updatedClass.name = name;
        // Save the updated class
        await updatedClass.save();

        res.status(200).json({
            data: updatedClass,
            message: "Class updated successfully",
        });
}); */

/* app.put("/students/:id", async (req, res) => {
    // Validate the request from user
    const { name, class_id, photo } = req.body;
    if (!name || name === "") {
        return res.status(400).json({
            data: null,
            message: "Name must be filled!",
        });
    }
    if (!class_id || class_id === "") {
        return res.status(400).json({
            data: null,
            message: "Class_id must be filled!",
        });
    }

    const id = req.params.id;
        // Find the student by primary key
        const updatedStudent = await student.findByPk(id);
        // Update student name
        updatedStudent.name = name;
        // Update student photo
        updatedStudent.photo = photo;
        // Update student class_id
        updatedStudent.class_id = class_id;
        // Save the updated student
        await updatedStudent.save();

        res.status(200).json({
            data: updatedStudent,
            message: "Student updated successfully",
        });
}); */

/* app.delete("/classes/:id", async (req, res) => {
    const id = req.params.id;

    const deletedClasses = await classes.destroy({
        where: {
            id: id
        }
    });

    res.status(200).json({
        message: "Classes deleted successfully",
    });
}); */

/* app.delete("/students/:id", async (req, res) => {
    const id = req.params.id;

    const deletedStudent = await student.destroy({
        where: {
            id: id
        }
    });

    res.status(200).json({
        message: "Student deleted successfully",
    });
}); */

/* In the end of route or after the last route */
app.use("*", (req, res) => {
    res.status(404).json({
        data: null,
        message: "Route not found",
    });
});

// Error middleware
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err.statusCode) {
        statusCode = err.statusCode;
    }
    if (err.message) {
        message = err.message;
    }

    res.status(statusCode).json({
        data: null,
        message,
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));