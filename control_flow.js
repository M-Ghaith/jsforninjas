//Task 1 
//Q1- What is control flow in JavaScript, and how is it typically managed?
//A1- It's a specifying the sequence in code executes.
//Q2- What is the difference between a for loop and a while loop? 
//When would you use each type of loop?
//for loop the number of iterations is known but while loop number of iterations 
//is unknown and the code will run until the condition is false.
// using for loop over array .

//Q3- What are the increment and decrement operators in JavaScript, 
//and how can they be used in loops and other contexts?
//A3- increment and decrement operators its add or subtract one from their operand,
 // they used like this i++ , i-- , ++i , --i . 


let num = 12;

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}

