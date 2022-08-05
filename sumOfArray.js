let randNumber = [78, 85, 45, 98, 78, 65];
let total = 0;

/* for (let i = 0; i < randNumber.length; i++){
    let number = randNumber[i]
    // console.log(number);
    total += number;
}
console.log(total); */

function sumOfArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        let singleNumber = arr[i];
        total += singleNumber;
    }
    return total;
}

const myArray = randNumber;
const sum = sumOfArray(myArray);
console.log(randNumber);
console.log('Sum of Array is', sum);