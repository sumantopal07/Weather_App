const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const { Console } = require('console');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//sudo killall -9 node

//nodemon app.js -e js,hbs
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//what the server should do
//when someone tries to get the resource at a specific URL

//(partial URL,fucntion what we do when someone visits the route)

//req: The information about the incoming request to the server
//res: Methods allowing us to customize what we're going 
//     to send back to the requester
app.get('', (req, res) => {
    //     //send something back to the requester so if 
    //     //someone's making a request from code using
    //     //something like the NPM request library they will get this back
    //     //if they're making the request from the browser this is what's
    //     //going to display in the browser window
    res.render('index', {
        title: 'Weather',
        name: 'Sumanto Pal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sumanto Pal'
    })
})

app.get('/help', (req, res) => {
        res.render('help', {
            helpText: 'This is some helpful text.',
            title: 'Help',
            name: 'Sumanto Pal'
        })
    })
    //ls - a - l~/.ssh
    //ssh-keygen -t  rsa -b 4096 -C "sumantopal07@gmail.com"
    //eval "$(ssh-agent -s)"
    //ssh-add ~/.ssh/id_rsa

app.get('/weather', (req, res) => {
    const location = req.query.address;
    if (location === undefined || location.length === 0) {
        res.send({
            error: 'Please provide addres to get weather'
        })
        return;
    }
    geocode(location, (location_error, location_data) => {

        if (location_error != undefined) {
            res.send({
                error: location_error
            })
        } else {
            forecast(location_data, (weather_error, weather_data) => {
                if (weather_error) {
                    res.send({
                        error: weather_error
                    })
                    return;
                }
                res.send({
                    error: weather_error,
                    data: weather_data
                })
                return;
            })
        }
    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
        return;
    }
    console.log(req.query);
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Unfortunately the page you clicked not found',
        name: 'Sumanto Pal'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: 'Unfortunately the page you clicked not found',
        name: 'Sumanto Pal',
    })
})

//start the server
app.listen(port, () => {
    //runs when  server is up and running
    console.log('Server is up on port 3000.');
})