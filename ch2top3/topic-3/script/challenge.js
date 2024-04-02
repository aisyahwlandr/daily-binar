const numbers = [2, 5, 8, 12, 15, 20, 17, 22, 25];

function findSumOfEven(arr) {
    // return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]; 
        }
    }
    
    return sum;
}
console.log(findSumOfEven(numbers));

function findAvarageOfOdd(arr){
    // const oddNumbers = arr.filter(num => num % 2 !== 0);
    // const sum = oddNumbers.reduce((acc, curr) => acc + curr, 0);
    // return oddNumbers.length ? sum / oddNumbers.length : 0;

    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}
console.log(findAvarageOfOdd(numbers));

function findMax(arr){
    // return arr.length ? Math.max(...arr) : undefined;

    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(numbers));

function findMin(arr){
    // return arr.length ? Math.min(...arr) : undefined;

    if (arr.length === 0) {
        return undefined;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin(numbers));