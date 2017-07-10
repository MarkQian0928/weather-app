const request = require('request');

var geoCodeAddress = (address)=>{
    return new Promise((resolve,reject)=>{
        var encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json: true,
        }, (error, response, body)=>{
            if(error){
                reject('unbale to connect to the service');
            }
            else if(body.status ==="ZERO_RESULTS"){
                reject('unable to find that address');
            }
            else if(body.status ==='OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
            }
        });
    });

};

geoCodeAddress('19416').then((location)=>{
    console.log(JSON.stringify(location, undefined,2));
},(err)=>{
    console.log(err);
});

