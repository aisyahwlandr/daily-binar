import students from "./students.js";

// DOM (Document Object Modeling)
/* 
    After 5 seconds the Navbar text will be change "ahahaha" and <div> with id "student card" the content will be replaced to "<h1>Wah berubah!</h1>" because DOM can modify the html file
*/
const studentCard = document.getElementById("student-card");
const navbarBrand = document.getElementsByClassName("navbar-brand");
const searchSubmit = document.getElementById("search-submit");

studentCard.innerHTML = "<h1>Loading...</h1>";

setTimeout(() => {
    const allStudents = students.getAllStudents();
    let studentCardWithAllStudents = "";
    allStudents.map((student) => {
        studentCardWithAllStudents += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
    });
    studentCard.innerHTML = studentCardWithAllStudents;
    navbarBrand[0].innerHTML = "ahahaha";
}, 2000);

/* 
    This code will be get the searching submit form html component and than we can modify, what happen when it submitted or anything
    In this case we will just add the alert that the submit has been triggered
*/
searchSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputSearch = document.querySelector(".form-control").value;
    if (inputSearch !== "") {
        const studentSearch = students.searchStudents(inputSearch);
        let studentCardWithSearchedStudents = "";
        studentSearch.forEach((student) => {
            studentCardWithSearchedStudents += `<div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text">${student.address.city}, ${student.address.province}</p>
                        </div>
                    </div>
                </div>`;
        });
        studentCard.innerHTML = studentCardWithSearchedStudents;
    } else {
        refreshCard();
    }
});


// Tambahkan event listener untuk filter ascending
document.getElementById("filterByAscending").addEventListener("click", function(event) {
    event.preventDefault();
    refreshCard("ascending");
});

// Tambahkan event listener untuk filter descending
document.getElementById("filterByDescending").addEventListener("click", function(event) {
    event.preventDefault();
    refreshCard("descending");
});

// Deklarasikan variabel global untuk menyimpan hasil pencarian
let searchResult = [];

// Fungsi untuk memfilter dan memperbarui kartu siswa
function refreshCard(sortingType) {
    // Cek apakah hasil pencarian ada
    if (searchResult.length > 0) {
        // Filter hasil pencarian
        if (sortingType === "ascending") {
            searchResult.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        } else if (sortingType === "descending") {
            searchResult.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        }
        displayStudents(searchResult);
    } else {
        // Jika tidak ada hasil pencarian, gunakan semua siswa
        const allStudents = students.getAllStudents();

        // Urutkan siswa berdasarkan nama
        if (sortingType === "ascending") {
            allStudents.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        } else if (sortingType === "descending") {
            allStudents.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
        }
        displayStudents(allStudents);
    }
}

// Fungsi untuk menampilkan siswa dalam card
function displayStudents(studentArray) {
    let studentCardWithAllStudents = "";
    studentArray.forEach((student) => {
        studentCardWithAllStudents += `<div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text">${student.address.city}, ${student.address.province}</p>
                </div>
            </div>
        </div>`;
    });
    studentCard.innerHTML = studentCardWithAllStudents;
}

// Perbarui fungsi pencarian untuk menyimpan hasil pencarian
searchSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputSearch = document.querySelector(".form-control").value;
    if (inputSearch !== " ") {
        searchResult = students.searchStudents(inputSearch);
        displayStudents(searchResult);
    } else {
        refreshCard();
    }
});
