//require dotENV
require('dotenv').config();

//Load express
const express = require('express');

//setup DB connection
const connectDB = require('./config/db')

//create our express app
const app = express();

//setup the port
const PORT = 3002;

//connect to our database
connectDB();


//Load our Routes
//pokemon
const pokemonRoutes = require('./routes/pokemonRoutes')

//npm install jsx-view-engine react react-dom
const {createEngine} = require('jsx-view-engine');

//require pokemon data model
const pokemon = require('./models/pokemon')

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))


//Connect our pokemon routes to our express app
app.use('/', pokemonRoutes);

//The root route
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to the Pokemon App!</h1>')
// });

//The Index route
// app.get('/pokemon', (req, res) => {
//     console.log('show data');
//     res.render('./Index', {pokeBallBag: pokemon})
//     // res.send(pokemon);

// });

//The Show Route
// app.get('/pokemon/:id', (req, res) => {
//     console.log(pokemon[req.params.id]);
//     res.render('./Show', {pokemon: pokemon[req.params.id]})
//});


//set your app to listen to the port 
app.listen(PORT, () => {
    console.log('Listening on port '+ PORT)
})