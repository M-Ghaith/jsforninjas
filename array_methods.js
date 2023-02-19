//Task 1
//Method 1 at
const array1 = [5, 12, 8, 130, 44, 66];
let index = 4;
console.log(array1.at(index));
index = -1;
console.log(array1.at(index));
//Method 2 from 
const map = new Map([[1, "johne"], [2, "loussy"], [3, "gorege"]]);
console.log(map);
console.log(Array.from(map.values()));
console.log(Array.from(map.keys()));

//Method 3 findIndex
const biger = (element) => element > 9;
console.log(array1.findIndex(biger));


//Method 4 fill
console.log(array1.fill(3, 2, 5));


//Task 2 
// mine dose't work 
const arrynames = ["johne", "Mechal", "Tony", "kim", "Biter", "Victor"];
const arryfilterd = arrynames.filter(arrynames => arrynames.length > 6);
console.log(arryfilterd);
//this one work  i copy it 
const words = ["johne","Mechal","Tony","kim","Biter","Victor"];
const result = words.filter(word => word.length > 4);
console.log(result);

//Task 3  
const person = [
{
    perosnName: "John", age: 33, gende: "male"
},
{
    perosnName: "rony", age: 50, gende: "male"
},
{
    perosnName: "Jennfer", age: 50, gende: "female"
}
];

console.log(person);
function findingName (persons){
    return persons.perosnName === "John";
}
console.log(person.find(findingName));








//const finding = person.find(perosnName => perosnName === "johne" );

///let key = Object.keys(map -1);
 //function f(lasritme){
  // return lasritme.at(-1)
 //}
// let names = lasritme(map);

//console.log(names);

 //let maps = Array.prototype.at.keys(2);
// console.log(maps);
// console.log(Array.prototype.at(map, -2));