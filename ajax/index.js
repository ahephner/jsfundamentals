const express= require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname +'/public'))
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function(){
	console.log("listening on port 3000");
})








// Any changes here we need to turn port on and off
//changes to html page, js page, or CSS do not have to restart port just refresh