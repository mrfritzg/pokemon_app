// Load the pokemon model
const PokeBallBag = require('../models/PokemonModel');

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
   console.log('in  /pokemon')
    try {
        // Use the Pokedex model to interact with the database
        // find will get all documents from the pokemon collection
        const pokeballbag = await PokeBallBag.find() 
        console.log(pokeballbag)

        // Looks in the views folder for "Index" and passes { pokeballbag } data to the view (kind of like a server props object)
        res.render('Index', { pokeballbag })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


// POST /fruits
module.exports.create = async  (req, res) => {
    console.log('POST /pokemon')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    try {
        // use the model to interact with db and create a new document in the pokemon collection
        const result = await PokeBallBag.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error')
    }
    //old way for array
    // fruits.push(req.body)
    res.redirect('/pokemon')
}

// GET /pokemon/new
module.exports.new = (req, res) => {
    res.render('New')
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    
    console.log('/pokemon/SHOW')
    console.log(req.params.id)
    try {
        const pokemon = await PokeBallBag.findById(req.params.id)
        console.log(pokemon)
        res.render('Show', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }

 
}