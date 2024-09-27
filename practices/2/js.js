// Задание 1
let admin;
let name = "Джон";
admin = name;
alert(admin); 

// Задание 2
let city__name = prompt("Название города:");
let city__year = prompt("Год образования города:");
let population = prompt("Население города:");

let city__age = 2024 - city__year;

alert(`Городу ${city__name} исполнилось ${city__age} лет(года) с момента его образования. Население составляет ${population} человек`);

// Задание 3
let rad = prompt("Введите радиус круга:");
let square = Math.PI * rad * rad;
alert(`Площадь круга с радиусом ${rad} равна ${square}`);


// Задание 4
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

let sum = Number(num1) + Number(num2);
let raznost = Number(num1) - Number(num2);
let chastnoe = Number(num1) / Number(num2);
let proizvedenie = Number(num1) * Number(num2);

alert(`Сумма: ${sum}\nРазность: ${raznost}\nЧастное: ${chastnoe}\nПроизведение: ${proizvedenie}`);