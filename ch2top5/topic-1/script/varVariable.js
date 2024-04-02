var priceTotal = 1000000;
var discount = 25;
var total = 0; //global variable

function getTotal(){
    var totalDiscount = priceTotal * (discount /100);
    var total = priceTotal - totalDiscount;
    //local variable, make new variable in this function
    //total = priceTotal - totalDiscount;
    //it will change the global variable
    console.log("total: ", total);
    //result 750.000
}
getTotal();
console.log("total: ", total); //result: 0