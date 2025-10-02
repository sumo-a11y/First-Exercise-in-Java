// 1. Variables and Data Types
let name = "Gbanyan Sumo";
let age = 32;
let isStudent = true;
console.log(name,age,isStudent);

// 2. Arithmetic Operators
let num1 = 30;
let num2 = 40;
console.log("Sum: ", num1 + num2);
console.log("Difference: ", num1 - num2);
console.log("Product: ", num1 * num2);
console.log("Quotient: ", num1 / num2);

// 3. Conditional Statements
let number = 32;
if(number % 2 == 0){
    console.log("Even");
}
else{
        console.log("Odd");
    }
// 4.Comparision Operators
let x = 45, y= "56";
console.log("Equal (==): ", x== y);
console.log("Strict Equal(===): ", x===y);
console.log("Not Equal(!=): ", x!=y);

// 5. For Loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// 6. While Loop
let j = 10;
while (j>1){
    console.log(j);
    j--;
}

// 7.Function Declaration
function squareNumber(X){
    return X* X;
}
console.log("Square of 9", SquareNumber(9));

// 9. Arrays function
const multiply = (X,Y)=> X*Y;
console.log("Multiply 7*8=",multiply(7,8))

// 9.Arrays and Iteration
let fruits = ["Banana","Watermelon","PalmApple","Orange","Mango"]
for(let fruit of fruits){
    console.log(fruit);
}

// 10. Json parsing
let jsonString = '{Course:"JavaScript","Duration":6, "Intermediate": true}';
let pared =jsonString.parsed(jsonString);
console.log("Course: ", parsed.Course);
console.log("Duration: ", parsed.duration);

