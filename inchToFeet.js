/* const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log(dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log(dadiFeet); */

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);