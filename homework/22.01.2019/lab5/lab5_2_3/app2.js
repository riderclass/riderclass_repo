let express = require('express'); //подключаем модуль express
let app = express();//создаем приложение express
let bodyParser = require('body-parser'); /*подключаем модуль для обработки содержимого тела
post запроса */
let route = require('./routes/products.js'); //подключаем файл с роутом

app.listen(8080); //Настраиваем express приложение слушать запросы на 80 порту
app.use(bodyParser.urlencoded({ extended: false })); /*регистрируем модуль для обработки
содержимого тела post запроса в express */
app.use(express.static('public')); /* настраиваем статический сервер, для отдачи контента из папки
public */
app.use('/reg', route); /*регистрируем роут, все url начинающиеся с /products будут
передаваться в обработку в этот роут*/
//Формируем обработчик post запроса на адрес http://localhost:80/somepath
app.post('/somepath', (req, res, next) => {
console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
res.send(JSON.stringify(req.body)); //Отправляем присланные параметры обратно клиенту
});

