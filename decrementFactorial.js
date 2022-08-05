// factorial
function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++){
        result *= i;
        console.log(i, result);
    }
}

// factorial(7);

// decrement
function decrement(number) {
    let result = number;
    for (let i = number; i >= 1; i--){
        result *= i;
        console.log(i, result);
    }
}

decrement(7);
