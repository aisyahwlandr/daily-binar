// Normal function
function calcSquare(length) {
    return length ** 2;
}

const square = calcSquare(20); // 400
console.log("square", square);

function calcSquareNoReturn(length){
    console.log(length ** 2);
    // undefined
}

const square2 = calcSquareNoReturn(10); //undefined
console.log("square2", square2);


// Arrow function
const calcTriangle = (length, height) => {
    return (length * height) / 2;
};

const triangle = calcTriangle(10, 10);
console.log("triangle", triangle);

// Currying function
const calcTriangleCurry = (length, (height) => {
    return (length * height) / 2;
});

const triangle2 = calcTriangle(10, 20);
console.log("triangle2", triangle2);

// Anonymous function
((name) => {
    console.log(name);
})("Nabiel");
