const http = require('http'); 
const fs = require('fs'); 
const filename = "data.txt";

http.createServer((request, response) => {

fs.readFile(filename, 'utf8', (err, data) => {
	if (err) {
		console.log('Could not find or open file for reading\n');
		response.statusCode = 404;
		response.end();} 
	else {
		var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf8');
		myReadStream.pipe(response);

let numbers,
  	out_1 = [],
	out_2 = [];

numbers = data.split(' ');
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i]%2 == 0) {
  		out_1.push(numbers[i]);
		out_2.push(Math.pow(numbers[i],3));} 
	else {
		out_2.push(Math.pow(numbers[i],3));}
  }

out_1 = out_1.join(' ');
out_2 = out_2.join(' ');

fs.writeFile("out-1.txt","\n" + out_1, function(error){
 
    if(error) throw error; 
    console.log("Асинхронная запись файла out-1 завершена. Содержимое файла:");
    let data = fs.readFileSync("out-1.txt", "utf8");
    console.log(data);  
});
    
var myReadStream1 = fs.createReadStream(__dirname + '/out-1.txt', 'utf8');
myReadStream1.pipe(response);

fs.writeFile("out-2.txt", "\n" + out_2, function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла out-2 завершена. Содержимое файла:");
    let data = fs.readFileSync("out-2.txt", "utf8");
    console.log(data);  // выводим считанные данные
});

var myReadStream2 = fs.createReadStream(__dirname + '/out-2.txt', 'utf8');
myReadStream2.pipe(response);
}
});
console.log("Request accepted!");
}).listen(8080, ()=>{
console.log("HTTP server works in 8080 port!\n");
});