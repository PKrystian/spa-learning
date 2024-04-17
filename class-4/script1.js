// 1.1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I am ${this.name}, I am ${this.age} years old`);
    }
}
// 1.2
person = new Person('Marek', 25);
person.greet();
// 1.3
person.name = 'John';
person.age = 30;
// 1.4
person.greet();
// 2.1
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    greet() {
        console.log(`I am ${this.name}, I am ${this.age} years old and I am a ${this.position}`);
    }
}
// 2.2
employee = new Employee('Pawel', 18, 'developer');
employee.greet();
// 2.3
employee.name = 'Anna';
employee.age = 35;
// 2.4
employee.greet();
// 3.1 + 4.1
class PersonNew {
    constructor(name, age) {
        this.name = this.formatName(name);
        this.age = this.formatAge(age);
    }
    greet() {
        console.log(`I am ${this.name}, I am ${this.age} years old`);
    }
    setName(name) {
        this.name = this.formatName(name);
    }
    setAge(age) {
        this.age = this.formatAge(age);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    formatAge(age) {
        try {
            if (age < 0) {
                console.error('Age cannot be negative');
                return this.age;
            }
            return age;
        } catch (error) {
            console.error(error);
        }
    }
}
// 3.2 + 4.2 + 4.3
personNew = new PersonNew('maria', 65);
personNew.greet();
personNew.setAge(-1);
personNew.setName('KASIA');
console.log(personNew.getAge());
console.log(personNew.getName());
personNew.greet();