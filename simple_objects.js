
let employee = {
    name: "john",
    job: "IT",
    salary: "$1000,000"
};
console.log(employee);

let person = {
    firstName: "luis",
    lastName: "morgin",
    age: 33
};
console.log(person);


//task 2 a
person = new Object();
person.firstName = "mario";
person.lastName = "house";
person.email = "mario@me.com";

console.log(person);
//task 2 b it dose't work
person = new Object();
delete person.age;
console.log(person);

let car = {
make :"BMW",
model:"M5",
colour:"green",
};

console.log(car.model);

car.colour = "Red";

console.log(car.colour);
