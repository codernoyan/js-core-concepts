// multiplication of numbers from 1 -7
// 1 * 2 * 3 * 4 * 5 * 6 * 7
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
        // console.log(i, result);
    }
    return result;
}

const result = factorial(7);
console.log(result);

/* // decremental loop
function decrementalFactorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--){
        result *= i;
        console.log(i, result);
    }
}

decrementalFactorial(5); */