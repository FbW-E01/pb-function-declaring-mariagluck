// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.
function calculateResult (number1, number2) {
    console.log(number1 * number2);
}
calculateResult(5,37);
// Result printed is 185 with numberd 5 and 37.

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.
const calculateResult2 = function(number1, number2) {
    console.log(number1 * number2);
}
calculateResult2(5,37);
// prints 185

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const calculateResult3 = (number1, number2) => {
    console.log(number1 * number2);
}
calculateResult3(5,37);
// IT prints 185

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 
function remainderResult (number1, number2) {
    console.log(number1 % number2);
}
remainderResult(48,2);

// it prints 0

const remainderResult2 = function(number1, number2) {
    console.log(number1 % number2);
}
remainderResult2(37,37);
// it prints 0


const remainderesult3 = (number1, number2) => {
    console.log(number1 % number2);
}
remainderesult3(48,2);
// IT prints 0