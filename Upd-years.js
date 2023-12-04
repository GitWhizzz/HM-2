
console.log(getYearMessage(prompt('Please enter how old are you')));

function getYearMessage(input) {
    let years = Number(input);
    let yearLastDigit = years % 10;
    let yearWord;

    if (yearLastDigit === 1 && years % 100 !== 11) {
        yearWord = 'рік';
    } else if (yearLastDigit >= 2 && yearLastDigit <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
        yearWord = 'роки';
    } else {
        yearWord = 'років';
    }

    return `Вам ${years} ${yearWord}`;
}
