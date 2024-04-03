sumEveryNumber = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum === 0 ? 'NaN' : sum;
}

console.log(sumEveryNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sumEveryNumber()) // NaN
