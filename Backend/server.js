const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';



//carregar bibliotecas globais
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');

//iniciar a aplicação
var app = express();

app.use(bodyParser.json({ type: 'application/json' }), bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(expressValidator());

// servir front-end
app.use(express.static('../conexi-html-files'))
app.use(express.static('../Painel'))

//motor de renderização
app.set('view engine', 'ejs');
app.use( '/Frontend',express.static('../Frontend/clyde'));

app.listen(port, function (err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else { console.log(err); }
});

//forçar utilização das bibliotecas
app.use(cors());

//colocar aqui código para express-sessions

module.exports = app;


require('./loader.js');

