//request 用来 make http calls
const request = require('request');
const yargs = require('yargs');

const input = yargs.options({
    address:{
        demand: true, //在terminal里输入的时候，必须要有这个
        alias: 'a',
        describe: 'address to fetch weather for',
        string: true //ask yargs always to parse the address as a string. 'true' make sure we will get the data, not blank
    }
    
})
.help()
.alias('help', 'h')
.argv;

//console.log(input);
var encodeAddress = encodeURIComponent(input.address);



request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true,
    /*this tells the request that the data coming back is json data, 
    and it should take the json stirng and converted it to object for us.*/
}, (error, response, body)=>{
    if(error){
        console.log('unbale to connect to the service');
    }else if(body.status ==="ZERO_RESULTS"){
        console.log('unable to find that address');
    }else if(body.status ==='OK'){
        //print the HTML for the url address. Course 28
        //console.log(body);
        //course 29, show all info in JSON from url address
        //console.log(JSON.stringify(body, undefined,2)); 
        //output only oneline of address, output the specific code that you need
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`latitude: ${body.results[0].geometry.location.lat}`)
    }
    
});