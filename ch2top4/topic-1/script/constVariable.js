const priceTotal = 1000000;
const discount = 25;
const total = 0; //global variable

function getTotal(){
    const totalDiscount = priceTotal * (discount /100);
    const total = priceTotal - totalDiscount;
    //local variable, make new variable in this function
    //total = priceTotal - totalDiscount;
    //it will change the global variable
    console.log("total: ", total);
    //result 750.000
}

getTotal();
console.log("total: ", total); //result: 0

// The diffrent with let is const can not be changed
// total = 1000000; // Can not change the const variable
console.log("total: ", total) //result: 1000000