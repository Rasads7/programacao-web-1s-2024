const express = require('express');
const calculadora = require('./util/calculadora');
const app = express();

app.get('/', function (req, res) {
    res.send('Calculadora - página inicial');
});

app.get('/somar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let result = calculadora.somar(a, b);
    res.send(""+result);
});

app.get('/subtrair/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let result = calculadora.subtrair(a, b);
    res.send(""+result);
});

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let result = calculadora.multiplicar(a, b);
    res.send(""+result);
});

app.get('/dividir/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let result = calculadora.dividir(a, b);
    res.send(""+result);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});