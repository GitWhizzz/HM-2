/* Вам необхідно написати програму, яка приймає на вхід число і виводить
у консоль повідомлення у форматі Вам N рік / ріки / років. 
Залежно від числа N слово рік має змінюватися на років або року.
Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки. */

let input = prompt('Please enter a year');
let years = Number(input);

if (isNaN(years) || years > 100 || years <= 0) {
    console.log('Ви ввели невірні роки');
} else if (years >= 11 && years <= 19) {
    console.log(`Вам ${years} років.`);
}
else if (years % 10 == 1) {
    console.log(`Вам ${years} рік.`);
}
else if (years % 10 == 2 || years % 10 == 3 || years % 10 == 4) {
    console.log(`Вам ${years} роки.`);
}
else {
    console.log(`Вам ${years} років.`);
}
