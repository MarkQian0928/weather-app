const request = require('request');
//request 用来 make http calls

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=16712%2015%20avenue%20sw%20edmonton%20canada',
    json: true,
    /*this tells the request that the data coming back is json data, 
    and it should take the json stirng and converted it to object for us.*/
}, (error, response, body)=>{
    console.log(body);//pritn the HTML for the url address. Course 28
    console.log(JSON.stringify(body, undefined,2)); //course 29, show all info in JSON from url address
});