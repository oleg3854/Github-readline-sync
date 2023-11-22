const readlineSync = require('readline-sync');

//Запрос переменной в терминале
const userChar = readlineSync.question('Введите число: ');
const userDiscount = readlineSync.question('Введите скидку: ');

//Объявление функции
const calculateDiscount = (price, discountPercentage) => {
  const discount = (price * discountPercentage) / 100;
  return (`${price} + ${discount}`);
}

//Вывод результата
console.log(calculateDiscount(userChar, userDiscount));