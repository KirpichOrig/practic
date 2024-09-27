'use strict';

// Функция getAverageAge принимает массив объектов с свойством age
function getAverageAge(users) {
    // Проверяем, что массив не пустой
    if (users.length === 0) {
        return 0;
    }

    // Вычисляем сумму возрастов
    let sumAge = users.reduce((sum, user) => sum + user.age, 0);

    // Вычисляем средний возраст
    let averageAge = sumAge / users.length;

    return averageAge;
}

// Пример использования функции
let users = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
];

let average = getAverageAge(users);
console.log("Средний возраст:", average); // Средний возраст: 27.666666666666668
