const readlineSync = require('readline-sync');

//Запрос переменной в терминале
const userChar = readlineSync.question('Введите число: ');

//Объявление функции
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

//Вывод результата
console.log(celsiusToFahrenheit(userChar)); 