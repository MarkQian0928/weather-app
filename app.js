//request 用来 make http calls
/*const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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


//在geocode文件里，geocodeAddress = (address, callback)， input.address 等于address; (errowMessage, result)=callback
geocode.geocodeAddress(input.address,(errowMessage, result)=>{
    if(errowMessage){
        console.log(errowMessage);
callback
    }
    else{
        console.log(JSON.stringify(result, undefined,2));
    }
});
*/

const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/22550d56b2e080c7a03ab033d2ad5733/37.8267,-122.4233',
    json: true
},(error, response,body)=>{
    console.log(body.currently.temperature);
});


