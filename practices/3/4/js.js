'use strict';

let login1 = prompt("Логин:"); 

let message1 = (login1 == 'Сотрудник') ? 'Привет' :
 (login1 == 'Директор') ? 'Здравствуйте' :
 (login1 == '') ? 'Нет логина' : '';
alert(message1);