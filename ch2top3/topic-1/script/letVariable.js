let priceTotal = 1000000;
let discount = 25;
let total = 0; //global variable

function getTotal(){
    let totalDiscount = priceTotal * (discount /100);
    let total = priceTotal - totalDiscount;
    //local variable, make new variable in this function
    //total = priceTotal - totalDiscount;
    //it will change the global variable
    console.log("total: ", total);
    //result 750.000
}

getTotal();
console.log("total: ", total); //result: 0

// let and var are not same in this case
// let total = 1000000; // Change the  value of the local variable to the global one
console.log("total: ", total) //result: 1000000