
const http = require('http'); // подключение модуля http
const fs = require('fs'); // подключение модуля для работы с файлом
const filename = "index.html";

http.createServer((request, response) => {// вызов метода создания http сервера
fs.readFile(filename, 'utf8', (err, data) => {
if (err) {
   response.writeHead(404, {'Content-Type': 'text/html; charset=utf8'});
   fs.createReadStream(__dirname + '/404.html').pipe(response);
} else {
console.log(`The file ${filename} is read and sent to the client\n`);
response.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
  fs.createReadStream(__dirname + '/header.html').pipe(response);
  fs.createReadStream(__dirname + '/body.html').pipe(response);
  fs.createReadStream(__dirname + '/footer.html').pipe(response);
}
});
console.log("Request accepted!");
}).listen(8080, ()=>{
console.log("HTTP server works in 8080 port!\n");
});
