const request=require('request')

const forecast = ({latitude,longtitude}, callback) => {
    const url = 'https://weather.api.here.com/weather/1.0/report.json?product=observation&latitude='+encodeURIComponent(latitude)+'&longitude='+encodeURIComponent(longtitude)+'&oneobservation=true&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ';

    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        }
        else if (body.Type) {
            callback('Temprature details not available of the current location, please try again', undefined);
        }
        else {
            const weather_object=body.observations.location[0].observation[0];
            callback(undefined, {
                temperature: weather_object.temperature,
                description: weather_object.description,
                humidity: weather_object.humidity,
            });

        }
    })
}


module.exports = forecast