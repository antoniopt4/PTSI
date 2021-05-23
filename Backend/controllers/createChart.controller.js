var request = require('request-promise'); 


async function crtChart(req,res) {

    

    var options = { 
        method: 'GET', 
        uri: 'http://127.0.0.1:5000/getWord'
        
       
        
    }; 

    var returndata; 
    var sendrequest = await request(options) 
    .then(function (parsedBody) { 
        console.log(parsedBody); // parsedBody contains the data sent back from the Flask server 
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable. 
        res.send(returndata);
    }) 
    .catch(function (err) { 
        console.log(err); 
    }); 
     
    res.send(returndata); 
}; 



//Export functions
module.exports = {

    crtChart: crtChart

};