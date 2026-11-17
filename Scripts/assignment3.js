// Part 1 — if only
function checkDelivery(orderTotal) {
  let message = "Delivery fee applies.";

  if (orderTotal >= 30) {
    message = "Free delivery!";
  }

  console.log("Order total: $" + orderTotal + " — " + message);
}

checkDelivery(35); // Egg Drop Soup + Fried Rice
checkDelivery(20); // Fried Rice
checkDelivery(30); // Dumplings

console.log("");

// Part 2 — if / else if / else
function getMenuType(hour) {
  let menu;

  if (hour >= 7 && hour <= 11) {
    menu = "Breakfast menu";
  } else if (hour >= 12 && hour <= 16) {
    menu = "Lunch menu";
  } else if (hour >= 17 && hour <= 22) {
    menu = "Dinner menu";
  } else {
    menu = "We are closed";
  }

  console.log("Hour " + hour + " → " + menu);
}

getMenuType(8);
getMenuType(13);
getMenuType(19);
getMenuType(2);
