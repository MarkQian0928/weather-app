//request 用来 make http calls
const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const input = yargs.options({
    address:{
        demand: false, //在terminal里输入true的时候，必须要有这个
        alias: 'a',
        describe: 'address to fetch weather for',
        string: true //ask yargs always to parse the address as a string. 'true' make sure we will get the data, not blank
    },
    latitude:{
        demand: true,
        alias: 't',
        describe: 'latitude for weather address',
        string: true,
    },
    longitude:{
        demand: true,
        alias: 'g',
        describe: 'longitude for weather address',
        stirng: true,
    }
})
.help()
.alias('help', 'h')
.argv;

//在geocode文件里，geocodeAddress = (address, callback)， input.address 等于address; (errowMessage, result)=callback
// geocode.geocodeAddress(input.address,(errowMessage, result)=>{
//     if(errowMessage){
//         console.log(errowMessage);
//     }
//     else{
//         console.log(JSON.stringify(result, undefined,2));
//     }
// });

weather.getWeather(input.latitude, input.latitude, (errMessage, result)=>{
    if(errMessage){
        console.log(errMessage);
    }
    else{
        console.log(JSON.stringify(result, undefined,2));
    }
});





