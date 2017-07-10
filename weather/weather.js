
const request = require('request');

var getWeather = (lat, lng, callback)=>{
    var encodeLat = encodeURIComponent(lat);
    var encodeLng = encodeURIComponent(lng);
    request({
        url: `https://api.darksky.net/forecast/22550d56b2e080c7a03ab033d2ad5733/${encodeLat},${encodeLng}`,
        json: true
    },(error, response,body)=>{
        if(!error && response.statusCode ===200){
            callback(undefined, {
                tempareture: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else{
            callback('unable to fetch weather');
        }  
    });
};

module.exports.getWeather = getWeather;

