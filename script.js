'use strict';

let title = prompt('Как называется ваш проект?', 'jsLesson');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые');
let screenPrice = parseInt(+prompt('Сколько будет стоить данная работа?', '12000'));
let rollback = 50;
let fullPrice = 100000;
let adaptive = confirm('Нужен ли адаптив на сайте?');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(','));
console.log(fullPrice * (rollback/100) + '%');

console.log('сообщение в консол');

alert('Hello world!');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let perc = fullPrice * (rollback/100);
let servicePercentPrice = Math.ceil(fullPrice - perc);

console.log(servicePercentPrice);

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}