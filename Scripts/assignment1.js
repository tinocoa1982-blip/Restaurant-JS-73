
// Assignment 1: const and let
 
// ---- const: information that NEVER changes ----
const restaurantName = "Tinoco Asian Restaurant";
const city = "San Diego";
const yearOpened = 2015;
const taxRate = 8;
 
// ---- let: information that CAN change ----
let isOpen = false;
let customersToday = 0;
let dailySales = 0;
let specialOfTheDay = "Egg Drop Soup";
 
// ---- Starting report ----
console.log(`===== ${restaurantName} - Morning Report =====
City: ${city}
Open since: ${yearOpened}
Tax rate: ${taxRate}%
Open right now: ${isOpen}
Customers today: ${customersToday}
Sales today: $${dailySales}
Special of the day: ${specialOfTheDay}
`);
 
// ---- Updating the let variables during the day ----
isOpen = true;                   // the restaurant opens
customersToday = 25;             // customers come in
dailySales = 450;                // orders are paid
customersToday = customersToday + 10;   // more customers at dinner
dailySales = dailySales + 300;          // more sales at dinner
specialOfTheDay = "Dumplings";   // the soup sold out, so the special changed
 
// ---- Updated report ----
console.log(`===== ${restaurantName} - End of Day Report =====
City: ${city}
Open since: ${yearOpened}
Tax rate: ${taxRate}%
Open right now: ${isOpen}
Customers today: ${customersToday}
Sales today: $${dailySales}
Special of the day: ${specialOfTheDay}
`);
 
// ---- Trying to change a const ----
// This line causes an error on purpose:
// TypeError: Assignment to constant variable.
// It is the last line, so the reports above still print first.
console.log("Trying to change the restaurant name...");
restaurantName = "Tinoco Asian Restaurant";
console.log("This line never runs because of the error above.");