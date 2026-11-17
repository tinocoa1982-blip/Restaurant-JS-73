console.log("Conditionals");

// if-statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}

let result = 50;
// > < == !
if(result > 60){
    console.log("You passed the exam");
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true because checks the value
// case 3: 5 === "5" -> false because checks value and datatype

// if-else statement condition (y/n)
// --- SYNTAX ---
// if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let points = 100;
if(points > 60){
    console.log("You won!!!");
}else{
    console.log("You lose!!!");
}

// Challenge 1: print if the water is boiling or not
// consider 100 as the boiling temp

let waterTemp = 101;
if(waterTemp > 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

// Challenge 2:
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color
// ("green", "yellow", or "red") and tell the
// bike what to do (Go!, Slow down, stop)

let trafficLight = prompt("Enter color:").toLowerCase();

if (trafficLight == "green") {
    console.log("Go!");
} else if (trafficLight === "yellow") {
    console.log("Slow down.");
} else if (trafficLight === "red") {
    console.log("Stop.");
} else {
    console.log("Invalid input.");
}

function getOutfit(temperature) {
    if (temperature < 15) {
        return "Wear a jacket";
    } else if (temperature < 25) {
        return "Wear a sweater";
    } else {
        return "Wear a t-shirt";
    }
}

let temp = Number(prompt("Enter the temperature:"));
console.log(getOutfit(temp));

// -- && and || operators ----------------------------
// && = AND - both conditions must be true
// || = OR  - at least one condition must be true

let hour = 14;

if (hour >= 12 && hour <= 16) {
    console.log("Lunch time");
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Restaurant is closed today");
} else {
    console.log("Restaurant is open");
}
// -- if inside a function ----------------------------
// This is the most important pattern for the assignment

function checkAge(age) {
    if (age >= 21) {
        return "Can order alcohol";
    } else {
        return "Cannot order alcohol";
    }
}

let message = checkAge(21);
console.log(message); // Can order alcohol

let message2 = checkAge(15);
console.log(message2); // Cannot order alcohol

// -- boolean as a parameter ----------------------------
function getGreeting(isVIP) {
    if (isVIP) {
        return "Welcome back, valued member!";
    } else {
        return "Welcome! Consider joining our membership.";
    }
}

// Challenge 4:
// Write a function called getDiscount that receives a total order amount and
// returns the discount that applies:

// $50 or more → 15% discount
// $30 or more → 10% discount
// $15 or more → 5% discount
// Less than $15 → no discount

// Call it four times with different amounts and print each result.

console.log(getGreeting(true));
console.log(getGreeting(false));

function getDiscount(total) {
    if (total >= 50) {
        return 15;
    } else if (total >= 30) {
        return 10;
    } else if (total >= 15) {
        return 5;
    } else {
        return 0;
    }
}

console.log(`Order of $65: ${getDiscount(65)}% discount`);
console.log(`Order of $30: ${getDiscount(30)}% discount`);
console.log(`Order of $20: ${getDiscount(20)}% discount`);
console.log(`Order of $10: ${getDiscount(10)}% discount`);