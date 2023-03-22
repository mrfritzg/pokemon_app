const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const pokemonController = require('../controllers/pokemonController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

//The root route
router.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>
    <a href="/pokemon">List Of Pokemon</a>`)
});


// Setup an "index" route for pokemon, attach it to router along with the controller logic
router.get('/pokemon', pokemonController.index)

// Setup a "new" route for creating pokemon
router.get('/pokemon/new', pokemonController.new)


// Setup a "create" route for adding pokemon data
router.post('/pokemon', pokemonController.create)

// Setup an "show" route for pokemon, attach it to router along with the controller logic
router.get('/pokemon/:id', pokemonController.show)


module.exports = router