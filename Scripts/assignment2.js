// Part 2 — A function with one parameter
function greetCustomer(name) {
  console.log("Welcome, " + name + "! We are happy to have you at Tinoco Asian Restaurant.");
}

greetCustomer("Maria");
greetCustomer("James");
greetCustomer("Sofia");

console.log(""); // blank line between parts

// Part 3 — A function with two parameters that returns a value
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

const taxRate = 0.08; // 8% tax

console.log("Dumplings — Total with tax: $" + calculateTotal(30.0, taxRate).toFixed(2));
console.log("Egg Drop Soup — Total with tax: $" + calculateTotal(15.0, taxRate).toFixed(2));
console.log("Fried Rice — Total with tax: $" + calculateTotal(20.0, taxRate).toFixed(2));

console.log("");

// Part 4 — A function that uses the result of another function
function calculateTip(total, tipPercent) {
  return total * (tipPercent / 100);
}

const dish = "Dumplings";
const price = 30.0;
const tipPercent = 15;

const total = calculateTotal(price, taxRate);
const tip = calculateTip(total, tipPercent);

console.log("Dish: " + dish);
console.log("Price: $" + price.toFixed(2));
console.log("Total with tax: $" + total.toFixed(2));
console.log("Tip (" + tipPercent + "%): $" + tip.toFixed(2));
