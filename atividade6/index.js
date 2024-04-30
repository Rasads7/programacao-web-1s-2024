const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/dados', function (req, res) {
    const dados = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data: req.body.data
    };
    res.render('dados.html', { dados: dados });
});


const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});