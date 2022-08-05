function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        /* // even number
        if (element % 2 === 0) {
            console.log(index, element);
        } */

        // odd number
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbers = [12, 65, 45, 78, 32, 55, 91, 75];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddSum = getSumOfAnArray(oddNumbers);

console.log(oddSum);