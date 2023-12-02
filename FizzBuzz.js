/* Вам необхідно написати програму, яка приймає на вхід число і виводить
у консоль повідомлення залежно від значення числа. Якщо число ділиться на 3, 
то повідомлення має бути Fizz, якщо число ділиться на 5,
то повідомлення має бути Buzz, 
а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. 
Наприклад, для числа 15 повідомлення має бути FizzBuzz. */

let input = prompt('Please enter a number');
let number = Number(input);

if (isNaN(number)) {
    console.log('You entered not a valid number');
} else if (number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz')
} else if (number % 3 == 0) {
    console.log('Fizz');
} else if (number % 5 == 0) {
    console.log('Buzz');
};


