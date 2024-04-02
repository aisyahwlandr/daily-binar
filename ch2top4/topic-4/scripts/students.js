// Di JavaScript, untuk mengimport file kita perlu require filenya, sehingga file tersebut akan terimport dan bisa di akses di kode bawah ini
import studentsData from "./data/students.json" assert { type: "json" };

// class Student {
//     getStudents() {
//         return students;
//     }

//     searchStudents(search) {
//         const searchStudents = studentsData.map(student => {
//             if (
//                 student.name.toLowerCase().includes(search.toLowerCase()) ||
//                 student.address.city
//                 .toLowerCase()
//                 .includes(search.toLowerCase()) ||
//                 student.address.province
//                 .toLowerCase()
//                 .includes(search.toLowerCase())
//             ) {
//                 return student;
//             }
//         });

//         return searchStudents;
//     }
// }

// Sebenarnya kelas belum digunakan secara besar-besaran setelah lebih banyak kerangka js menggunakan komponen berbasis fungsional terutama di sisi frontend.
// Class tidak friendly untuk developer baru, dan functional based lebih mudah dari class based.
class Student {
    // Ketika function ini di panggil, dia akan mengambil semua data yang ada di students dan dapat menampilkannya di sisi frontend.
    getAllStudents(){
        return studentsData;
    }

    // Ketika function ini dijalankan, dia akan mencari students based dari his/her name, city, atau province he/she lived dan maka dia akan mengembalikan hasil dari pencarian data.
    searchStudents(search) {
        const searchedStudents = studentsData.filter(
            (student) =>
                student.name.toLowerCase().includes(search.toLowerCase()) ||
                student.address.city
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                student.address.province
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );
        return searchedStudents;
    }
}

export default new Student();