//request 用来 make http calls
const request = require('request');

var geocodeAddress = (address, callback)=>{
    var encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true,
        /*this tells the request that the data coming back is json data, 
        and it should take the json stirng and converted it to object for us.*/
    }, (error, response, body)=>{
        if(error){
            callback('unbale to connect to the service');
        }else if(body.status ==="ZERO_RESULTS"){
            callback('unable to find that address');
        }else if(body.status ==='OK'){
            //print the HTML for the url address. Course 28
            console.log(body);
            //course 29, show all info in JSON from url address
            console.log(JSON.stringify(body, undefined,2)); 
            //这里的callback 等于app.js里面geocodeAddress里的(errowMessage, result)，undefined代表的是没有errowMessage
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat
            })
            //output only oneline of address, output the specific code that you need
            //下面的两个已经合并到上边的callback里了
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`latitude: ${body.results[0].geometry.location.lat}`)
        }
        
    });
    };

module.exports.geocodeAddress = geocodeAddress;