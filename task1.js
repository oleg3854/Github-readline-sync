const readlineSync = require('readline-sync');

//Запрос переменной в терминале
const userChar = readlineSync.question('Введите число: ');

//Объявление функции
const IncomeTaxCalculator = (income) => (income * 15) / 100;

//Вывод результата
console.log(IncomeTaxCalculator(userChar))