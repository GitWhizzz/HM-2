/* Вам необхідно написати програму, яка приймає на вхід число і виводить 
у консоль повідомлення, що вказує, чи є введений рік високосним. */

let input = prompt('Please enter a year');
let year = Number(input);

if (isNaN(year)) {
    console.log('You entered not a valid year');
} else if (year % 4 == 0) {
    console.log('This year is a leap year')
} else {
    console.log('This year is not a leap year')
};

