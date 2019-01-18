const fs = require('fs');
const settings = require('./config.json');

process.on('message',(obj)=>{
	let dateNow = new Date();
	let logData = dateNow + " " + obj.method + " " + obj.params + "\n" ;
	fs.writeFile(settings.logFile,logData,{
		encoding:'utf8',
		flag:'a',
	}, (err)=>{
		if(err){
			console.log('child: cant save log');
		} else {
			console.log('child: log saved');
		}
	});
});
