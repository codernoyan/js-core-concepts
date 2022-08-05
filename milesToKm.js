// miles to kilometer
function milesToKilometers(miles) {
    const kilometer = miles / 1.609;
    return kilometer;
}

const myMiles = 420;
const myKilometer = milesToKilometers(myMiles);
const kmInTwoDecimals = parseFloat(myKilometer.toFixed(2));
console.log(myMiles, 'miles is equal to', kmInTwoDecimals, 'km');

//kg to gram
function kilogramToGram(kg) {
    const gram = kg * 1000;
    return gram;
}

const productInKg = 15;
const productInGram = kilogramToGram(productInKg);
console.log(productInKg, 'kg is equal to', productInGram, 'gram');


var randomNumbers = [45, 78, 99, 68, 36, 13, 74];

for (let i = 0; i < randomNumbers.length; i++){
    const number = randomNumbers[i];
    if (number == 99) {
        break;
    }
    console.log(number);
}