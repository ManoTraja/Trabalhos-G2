var http = require('http');
var n = require('./primeiromodulo');
var dia = require('./moduloData');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(Data());
    res.write(dia.diaDaSemana()+'<br>');
    res.end("<center> <h2> Olá, Boa tarde!</h2></center>")
}).listen(80);
    