//function syntax
// 1. Declare the fn (Create the fn)
function login(){
    console.log("Welcome to the system!");
};

//2. Call the function (code,console,user)
login();

// Functions with parameters
function logout(user){
    console.log("Goodbye " + user + " see you later!");
};

logout("Andrew");
logout("Tim");
logout("Bob");

// Function with multiple parameters
function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
};

gradeExam("Desiree", 10, 0.33);
gradeExam("Justin", 12, 0.33);
gradeExam("Andrew", 13);

// Mini Challenge 1: Double the number
// Create a function called doubleNumber that takes one number
// as a parameter.
// That function should print the number multiplied by 2
// Call the function with different numbers and see
// the results in the browser's console.

function doubleNumber(number){
    let result = number * 2;
    console.log(`${number} doubled is: ${result}`);
};

doubleNumber(5);
doubleNumber(12);
doubleNumber(100);
doubleNumber(7.5);

// Functions with return
// Create a function called add that returns the operation
// of the sum of two elements
function add(num1, num2){
    let total = num1 + num2;
    return Number(total);
};

let x = add(10, 2);
doubleNumber(x);

// Using the return value in another calculation
function applyDiscount(price, discountPercent){
    let discount = price * (discountPercent/100);
    return price - discount;
};

function addDeliveryFee(total, fee){
    return total + fee;
}

let originalPrice = 150;
let priceAfterDiscount = applyDiscount(originalPrice, 10);
let finalPrice = addDeliveryFee(priceAfterDiscount, 5);

console.log(`Original: ${originalPrice}
After Discount: ${priceAfterDiscount}
Final with delivery: ${finalPrice}
`);