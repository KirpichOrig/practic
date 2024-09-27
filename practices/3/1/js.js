'use strict';

let price = prompt("Введите стоимость товара:");
let money = prompt("Введите количество денег у клиента:");

let result = (price < 0 || money < 0) ? 'Неверный формат ввода!' :
  (price === money) ? 'Покупка совершена успешно!' :
  (price < money) ? `Покупка совершена, ваша сдача: ${money - price} р.` :
  (price > money) ? `Покупка не совершена, для покупки не хватает  ${price - money} р.` : '';

alert(result);