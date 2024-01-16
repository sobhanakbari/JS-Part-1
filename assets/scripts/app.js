const currentDifault = 0;
let currentResult = currentDifault;

function add(num1, num2){
    const result = num1 + num2;
    alert (`this result is ${result}`)
}

add(5,10);
add(3,5);

currentResult = currentResult + 10;

let calculationDescription = `( ${currentResult}  10 + 2 / 3 * 10)`;

outputResult(currentResult, calculationDescription);
