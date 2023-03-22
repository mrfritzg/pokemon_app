import React from 'react'

const myStyle = {
    color: '#3A5A40',
    backgroundColor: '#DAD7CD',
    };

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    // const myJSON = JSON.stringify(props.pokeBallBag)
    return (
        
        <div style={myStyle}>
            <h1>PokeMon View</h1>
            {/* {myJSON}
            {console.log(props.pokeBallBag)} */}
            <ul>
                {props.pokeballbag.map((pokemon, index) => 
                    <li key={index}>
                        <a href={`/pokemon/${pokemon._id}`}><strong>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add More...</a>
            <br/><br/><br/>
        </div>
    )
}

export default Index