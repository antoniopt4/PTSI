var request = require('request-promise'); 

async function srchTop(req,res) {

    var data = { 
        
    
        topico: req.body.topico   //Tópico que vem do form do frontend
    } 

    var options = { 
        method: 'POST', 
        uri: 'http://127.0.0.1:5000/searchTopic', 
        body: data, 
        json: true // Automatically stringifies the body to JSON 
    }; 

    var returndata; 
    var sendrequest = await request(options) 
    .then(function (parsedBody) { 
        console.log(parsedBody); // parsedBody contains the data sent back from the Flask server 
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable. 
    }) 
    .catch(function (err) { 
        console.log(err); 
    }); 
     
    res.send(returndata); 
}; 



//Export functions
module.exports = {

    srchTop: srchTop

};