const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=cCVCTsXDuathXecSe2QJXNBekG4QGTx2&q= ' + encodeURIComponent(address);

    //Function to run when we get response back
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body === undefined || body.length == 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else if (body.Code == 'ServiceUnavailable') {
            callback('Number of daily requests exceeded', undefined);

        } else {
            callback(undefined, {
                latitude: body[0].GeoPosition.Latitude,
                longtitude: body[0].GeoPosition.Longitude,

            });

        }
    })
}


module.exports = geocode