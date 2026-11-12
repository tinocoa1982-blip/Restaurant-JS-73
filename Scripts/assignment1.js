console.log("Variables");
//comments are notes for devs

// Strings
// a string is text
let firstName = "Andrew";
let city = "San Diego";
let lastName = "Tinoco";

console.log(firstName);
console.log(city);
console.log(lastName);

// Numbers
 // integers or floating point numbers
 let age = 36;
 let price = 10.50;
 console.log(age);
 console.log(price);

 // Booleans
 // A boolean is either true or false

 let isStudent = false;
 let isLoggedIn = true;

 console.log(isStudent);
 console.log(isLoggedIn);

  // Arithmetic operations

 let num1 = 20;
 let num2 = 3;

 let sum = num1 + num2;
 let sub = num1 - num2;
 let mult = num1 * num2;
 let div = num1 / num2;

 console.log("Sum is: " + sum);
 console.log("Sub is: " + sub);
 console.log("Mult is: " + mult);
 console.log("Div is: " + div);

  // Option 2 - template literal (cleaner use ``)
 console.log(`My name is ${firstName} and I live in ${city}`);

// Assignment 1: Tinoco Asian Restaurant Report
// const = data that never changes
// let   = data that can be updated

// ----- Restaurant info (const - never changes) -----
const restaurantName = "Tinoco Asian Restaurant";
const cuisine = "Asian";
const yearFounded = 2026;
const slogan = "All dishes are handmade with fresh ingredients.";

// ----- Menu item names (const - never change) -----
const dish1 = "Dumplings";
const dish2 = "Egg Drop Soup";
const dish3 = "Fried Rice";

// ----- Prices and daily info (let - can change) -----
let dumplingsPrice = 30.00;
let eggDropSoupPrice = 15.00;
let friedRicePrice = 20.00;
let isOpen = false;
let reservationsToday = 0;
let togoOrdersToday = 0;

// ----- Print the starting report -----
console.log("===== " + restaurantName + " =====");
console.log("Cuisine: " + cuisine);
console.log("Founded: " + yearFounded);
console.log(slogan);
console.log("----- MENU -----");
console.log(dish1 + ": $" + dumplingsPrice.toFixed(2));
console.log(dish2 + ": $" + eggDropSoupPrice.toFixed(2));
console.log(dish3 + ": $" + friedRicePrice.toFixed(2));
console.log("Open Now: " + isOpen);
console.log("Reservations Today: " + reservationsToday);
console.log("Togo Orders Today: " + togoOrdersToday);

// ----- Update the let variables -----
isOpen = true;
reservationsToday = reservationsToday + 8;
togoOrdersToday = togoOrdersToday + 12;
friedRicePrice = 22.00;
eggDropSoupPrice = 13.50;

// ----- Print the updated report -----
console.log(`
===== UPDATED REPORT =====
${dish1}: $${dumplingsPrice.toFixed(2)}
${dish2}: $${eggDropSoupPrice.toFixed(2)} (on sale!)
${dish3}: $${friedRicePrice.toFixed(2)} (new price)
Open Now: ${isOpen}
Reservations Today: ${reservationsToday}
Togo Orders Today: ${togoOrdersToday}
`);

// ----- Try to change a const -----
try {
  restaurantName = "Tinoco Pizza Place";
} catch (error) {
  console.log("Error: " + error.message);
  console.log("The name is still: " + restaurantName);
}
