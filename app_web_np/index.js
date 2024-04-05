const express = require('express');
const mat = require('./util/matematica');
const app = express();

app.get('/', function(req, res){
    res.send('página inicial');
});

app.get('/verificar-numero-primo/:n', function(req, res){
    let n = req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('app rodando na porta' + PORT);
});