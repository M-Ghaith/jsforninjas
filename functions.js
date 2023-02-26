///Task 1: calculateAverage
function calculateAverage(numbers){
let sum = 0 ;
    for(let i = 0; i < numbers.length; i++)
    {
          sum += numbers[i];
          
    }
    
    return sum /= numbers.length ;
}
const numbers = [1, 2, 3, 4, 5];
const avg = calculateAverage(numbers);
console.log(avg); // Output: 3

/////////////////////////////////
//Task 2: reverseArray
const letters = ["a", "b", "c", "d"];
function reverseArray(letters){
     let reversedArr = [];
    for(let i = letters.length -1; i>=0  ; i--)
     {
        let j = letters[i];
        reversedArr.push(j);
     }
     
     return reversedArr;
}
 const reversedArray = reverseArray(letters);
 console.log(reversedArray); // Output: [ 'd', 'c', 'b', 'a' ]

 /////////////////////////////////
 //Task 3:
 const filterArray = (arr, filterFunc) => arr.fil(filterFunc);

const evenNumbers = num => num % 2 == 0;

// Example usage:
const filteredNumbers = filterArray(numbers, evenNumbers);
console.log(filteredNumbers); // Output: [2, 4]