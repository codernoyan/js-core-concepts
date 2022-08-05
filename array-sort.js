const names = ['amina', 'jamina', 'babina', 'rujina', 'lamina', 'kabina', 'samia'];

// sorting names with a alphabetical order
function namesShort(arr) {
    const shortingNames = arr.sort();
    return shortingNames;
}

console.log(namesShort(names));

// sorting numbers
const rollNumbers = [41, 65, 23, 74, 22, 11, 2, 56, 96, 114, 119, 159, 116, 83, 38];

function sortingRollNumbers(roll) {
    roll.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < roll.length; i++){
        let sortedRoll = roll[i];
        console.log(sortedRoll);
    }
    return roll;
}

console.log(sortingRollNumbers(rollNumbers));

// console.log(rollNumbers);