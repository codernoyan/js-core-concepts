// factorial with while loop in reverse way
function factorialReverse(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result *= i;
        i--;
    }
    return result;
}

const fact = factorialReverse(7);
console.log(fact);
