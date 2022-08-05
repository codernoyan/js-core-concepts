// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('her year', isHerYearLeapYear) */

// leap year with a new way.
function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year, 'is a leap year');
    } else {
        console.log(year, 'is not a leap year');
    }
}

isLeapYear(2024);

