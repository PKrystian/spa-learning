// 1
let car = {
    brand: 'Seat Ibiza',
    value: 5000,
    power: 105,
    increasePower: function(power) {
        this.power += power;
    }
};

// 2
console.log(car);

// 3
car.increasePower(50);

// 4
console.log(car);

// 5
function Car(brand, value, power) {
    this.brand = brand;
    this.value = value;
    this.power = power;
}

Car.prototype.increasePower = function(power) {
    this.power += power;
};

// 6
let cars = [
    new Car('Toyota', 50000, 150),
    new Car('Honda', 40000, 120),
    new Car('Ford', 30000, 100)
];

// 7
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 8
cars[0].increasePower(50);

// 9
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 10
console.log(cars[0].toString());

// 11
Car.prototype.toString = function() {
    return `{brand: ${this.brand}, value: ${this.value}, power: ${this.power}}`;
};

// 12
console.log(cars[0].toString());

console.log('---------------------');

// 2.1
let carJSON = JSON.stringify(cars[0]);
console.log(carJSON);

// 2.2
let carObject = JSON.parse(carJSON);
console.log(carObject);