var express = require('express');
var app = express();
var port = 9001;

app.use(express.static(__dirname+'/public'));

app.get('/api/interest_rate', function(req, res){
	
	var randomNumber = Math.floor(Math.random() * 2000) / 100 //random number to 2 decimal points...
	res.json(randomNumber);
})








app.listen(port, function(){
	console.log('listening on port: ' + port);
});