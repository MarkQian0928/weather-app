const yargs = require('yargs');
const axios = require('axios');

const input = yargs.options({
    address:{
        demand: true, //在terminal里输入true的时候，必须要有这个
        alias: 'a',
        describe: 'address to fetch weather for',
        string: true //ask yargs always to parse the address as a string. 'true' make sure we will get the data, not blank
    },
})
.help()
.alias('help', 'h')
.argv;

var encodeAddress = encodeURIComponent(input.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeURL)
.then((response)=>{
    if(response.data.status ==='ZERO_RESULTS'){
        throw new Error('unable to find that address');
    }

    var encodeLat = response.data.results[0].geometry.location.lat;
    var encodeLng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/22550d56b2e080c7a03ab033d2ad5733/${encodeLat},${encodeLng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
})
.then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemp = response.data.currently.apparentTemperature;
        console.log(`it's currently ${temperature}, and it feels like ${apparentTemp}`);
    })
.catch((e)=>{
    if(e.code ==='ENOTFOUND'){
        console.log('unable to connect to server');
    }
    else{
        console.log(e.message);
    }
    //console.log(e);
});






