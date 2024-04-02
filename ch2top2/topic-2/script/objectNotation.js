const students = [
    {
        name: "Nida",
        address: {
            city: "Jakarta",
            province: "DKI Jakarta",
        },
    },
    {
        name: "Dwi",
        address: {
            city: "Tangerang",
            province: "Banten",
        },
    },
    {
        name: "Feb",
        address: {
            city: "Tangerang",
            province: "Banten",
        },
    },
    {
        name: "Hukma",
        address: {
            city: "Bandung",
            province: "Jawa Barat",
        },
    },
    {
        name: "Fauzan",
        address: {
            city: "Bandung",
            province: "Jawa Barat",
        },
    },
    {
        name: "Shahrizan",
        address: {
            city: "Palembang",
            province: "Sumatera Selatan",
        },
    },
];

// console.log(students[1].name);
// console.log(`${students[0].name} is from ${students[0].address.city}, ${students[0].address.province}`);
// console.log(`${students[1].name} is from ${students[1].address.city}, ${students[1].address.province}`);

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].name} is from ${students[i].address.city}, ${students[i].address.province}`);
// }

// for (let index = 0; index < students.length; index++){
//     const student = students[index];
//     console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
// }

// students.map((siswa) => {
//     console.log(`${siswa.name} is from ${siswa.address.city}, ${siswa.address.province}`);
// });

// for (let i = 0; i < students.length; i++) {
//     if (students[i].address.city == "Bandung") {
//         console.log(`${students[i].name} is from ${students[i].address.city}, ${students[i].address.province}`);
//     } else {
//         console.log(`${students[i].name} is not from Bandung`);
//     }
// }


// students.map((student) => {
//     if (student.address.city == "Bandung") {
//         console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
//     }else 
//     console.log(`${student.name} is not from Bandung`);
// })

// students.map((student) => {
//     if (student.address.city == "Bandung") {
//         console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
//     }
// })

const filteredStudents = students.filter(student => {
    const nameMatch = student.name.toLowerCase().includes('zan');
    const cityMatch = student.address.city.toLowerCase().includes('zan');
    const provinceMatch = student.address.province.toLowerCase().includes('zan');
    
    return nameMatch || cityMatch || provinceMatch;
});


// for (let i = 0; i < filteredStudents.length; i++) {
//     console.log(`${filteredStudents[i].name} is from ${filteredStudents[i].address.city}, ${filteredStudents[i].address.province}`);
// }

filteredStudents.map((student) => {
    console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
});

// const filteredStudents = students.filter(student => {
//     const name = student.name.toLowerCase();
//     const city = student.address.city.toLowerCase();
//     const province = student.address.province.toLowerCase();

//     if (name.includes('zan')) {
//         return true;
//     } else {
//         if (city.includes('zan')) {
//             return true;
//         } else {
//             if (province.includes('zan')) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// });

// filteredStudents.map((student) => {
//     console.log(`${student.name} is from ${student.address.city}, ${student.address.province}`);
// });
