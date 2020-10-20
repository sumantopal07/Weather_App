const https=require('https');
const url = 'https://weather.api.here.com/weather/1.0/report.json?product=observation&latitude='+encodeURIComponent('22.345')+'&longitude='+encodeURIComponent('44.222')+'&oneobservation=true&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ';


const request=https.request(url,(response)=>{

    let data='';

    response.on('data',(chunk)=>{
        data=data+chunk.toString();
    })

    response.on('end',()=>{
        console.log(JSON.parse(data));
        
    })
})

request.end();