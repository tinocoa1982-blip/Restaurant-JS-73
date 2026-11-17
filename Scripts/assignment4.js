const restaurantName = "Tinoco Asian Restaurant";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const sales = [320, 410, 290, 505, 480, 620, 710];

function generateReport() {
    console.log(`===== ${restaurantName} - Weekly Report =====`);

    let total = 0;

    for (let i = 0; i < days.length; i++) {
        console.log(`${days[i]} - $${sales[i]}`);
        total = total + sales[i];
    }

    console.log(`Total sales: $${total}`);
}

function getDayLabel(price) {
    if (price < 350) {
        return "Slow day";
    }
    else if (price < 600) {
        return "Good day";
    }
    else {
        return "Excellent day"; // 600 and above
    }
}

function generateReport() {
    for (let i = 0; i < days.length; i++) {
        console.log(`${days[i]} - ${sales[i]} --- ${getDayLabel(sales[i])}`);
    }
}

generateReport();