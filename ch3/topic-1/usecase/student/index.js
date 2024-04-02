const studentRepo = require("../../repository/student");

exports.getStudents = (name, city, province) => {
    const data = studentRepo.getStudents(name, city, province);
    return data;
};

exports.getStudent = (id) => {
    const data = studentRepo.getStudent(id);
    return data;
}

exports.addStudent = (payload) => {
    const data = studentRepo.addStudent(payload);
    return data;
};

exports.putStudent = (updater) => {
    const data = studentRepo.putStudent(updater);
    return data;
};

exports.deleteStudent = (deleted) => {
    const data = studentRepo.deleteStudent(deleted);
    return data;
}