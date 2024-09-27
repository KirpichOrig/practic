'use strict';

let login = prompt("Введите логин:");
let password = login == "Админ" ? prompt("Введите ваш пароль:") : null;
let message = password == "Я главный" ? "Здравствуйте!" : 
 password == "" || password == null ? "Отменено" : 
 login == "" || login == null ? "Отменено" : 
 "Я вас не знаю";
alert(message);