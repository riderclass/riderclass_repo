let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер
router.post('/', (req, res, next)=>{ //вешаем на роут обработчик get запросов
//Выводим параметры из маршрута
console.log(`Параметры url: login ${req.params.login}` + `Параметры email: n ${req.params.email}` + `Параметры pass: name ${req.params.pass}` +
` action ${req.params.action}`);
res.send('Ok!'); //Отправляем клиенту, строчку 'Ok!'
});
module.exports = router; //Экспортируем роутер из модуля