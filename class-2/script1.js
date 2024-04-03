toSquare = function(number) {
    return number * number;
}

arraySquareFor = function(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = toSquare(array[i]);
    }
    return array;
}

arraySquareForOf = function(array) {
    for (let element of array) {
        array[array.indexOf(element)] = toSquare(element);
    }
    return array;
}

arraySquareForIn = function(array) {
    for (let index in array) {
        array[index] = toSquare(array[index]);
    }
    return array;
}

arraySquareForEach = function(array) {
    array.forEach(function(element, index) {
        array[index] = toSquare(element);
    });
    return array;
}

arraySquareForEachArrow = function(array) {
    array.forEach((element, index) => {
        array[index] = toSquare(element);
    });
    return array;
}

// 1
console.log('1');
var number = 5;
console.log(toSquare(number))

var array = [1, 2, 3, 4, 5, 6];
// 2 a
console.log('2 a');
console.log(arraySquareFor(array));

// 2 b
console.log('2 b');
console.log(arraySquareForOf(array));

// 2 c
console.log('2 c');
console.log(arraySquareForIn(array));

// 2 d
console.log('2 d');
console.log(arraySquareForEach(array));

// 3
array = [1, 2, 3, 4, 5, 6];
console.log('3');
console.log(arraySquareForEachArrow(array));
