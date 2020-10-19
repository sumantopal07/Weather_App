//client side javascript which going to run in the browser

console.log('Client side javascript file is loaded!');



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent='From JavaScript';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    const url = 'http://localhost:3000/weather?address=' + location;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    //browser based api  //asynchronous i/o
    fetch(url).then((response) => {


        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                messageOne.textContent = JSON.stringify(data.error);
            } else {
                const temp = data.data.temperature;
                const description = data.data.description;
                const Humidity = data.data.humidity;
                let answer = location + " has current temprature of " + temp + " and it is " + description + " with Humidity of " + Humidity + "% ";
                messageOne.textContent = location;
                messageTwo.textContent = answer;
            }
        })

    });
});