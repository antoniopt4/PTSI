const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
const { MongoClient } = require('mongodb');



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

/*----------------------------------------------------START MONGODB---------------------------------------------------------*/

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://apt2:yM0lRvFoklUsYgz2@cluster0.0zcqp.mongodb.net/gs?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     */
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        
       
        

    
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here
/*
//Read Function
async function findProfiles(client) {
  
    const result = await client.db("gs").collection("Profiles").find().toArray();

      if (result) {
        
        console.log(result);
    } else {
        console.log(`No results found!`);
    }
}
*/