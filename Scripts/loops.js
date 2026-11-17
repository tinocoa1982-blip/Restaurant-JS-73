console.log("Loops");

for(let i=0;i<4;i++){
    document.write("My for loop is working?");
}

for(let i=1;i<=10;i++){
    console.log(i);
}
// multiplication table of 2
for(let i=1;i<=10;i++){
    console.log(` 2 x ${i} = ${i*2}`);
}

// multiplication table of 5
for(let i=1;i<=10;i++){
    console.log(` 5 x ${i} = ${i*5}`);
}

// different increments
// count by 1
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// count by 5
for (let i = 0; i < 20; i += 5) {
    console.log(i); // 0 5 10 15
}

// display numbers from 0 to 20; 2 by 2
for (let i = 0; i <= 20; i += 2) {
    console.log(i); // 0 2 4 6 8 10 12 14 16 18 20
}

// Arrays
// without arrays

let temp1 = 30;
let temp2 = 40;
let temp3 = 25;
let temp4 = 27;
let temp5 = 38;

// .. this gets messy fast
// with an array

let temperatures = [30, 40, 25, 27, 38];

console.log(temperatures);

// console.log(temperatures[0]);
// console.log(temperatures[1]);
// console.log(temperatures[2]);
// console.log(temperatures[3]);
// console.log(temperatures[4]);

// loop to travel the array
for (let i = 0; i < 5; i++) {
    console.log(temperatures[i]);
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// travel the array
for (let i = 0; i < days.length; i++) {
    console.log(days[i]); // Monday Tuesday ... Sunday
}
const sales = [320, 410, 290, 505, 480, 620, 710];

// travel the array
for (let i = 0; i < 7; i++) {
    console.log(`${days[i]} - ${sales[i]}`);
}
