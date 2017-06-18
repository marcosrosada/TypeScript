console.log("Rest Parameters Operator");

let displayColors = (message, ...colors) => {
    console.log(message);

    for (let i in colors) {
        console.log(colors[i]);
    }
}

let message = 'List of Colors';

displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');


console.log("");

function sum(...numbers) {
    let result = 0
    numbers.forEach((number) => {
        result += number
    });
    console.log('Result', result );
}

sum(1, 2, 3, 4, 5) // 15


console.log("");
console.log("Spread Operator");

let colorArray = ['Yellow', 'Orange', 'Indigo'];
displayColors(message, ...colorArray);