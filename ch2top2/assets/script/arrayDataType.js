const studentNames  = ["Nida","Dwi","Hukma"];

studentNames.push("feb");
studentNames.push("fauzan");

studentNames.map((name, index) =>{
    console.log(`the student on table ${index} 
    is ${name}`);
});

console.log(studentNames[2]); //Hukma


console.log(`The student on table 0 is ${studentNames[0]}`); // Nida
console.log(`The student on table 2 is ${studentNames[2]}`); // Hukma
console.log(`The student on table 4 is ${studentNames[6]}`); //undefined
