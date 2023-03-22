import React from 'react'

const myStyle = {
    color: '#3A5A40',
    backgroundColor: '#DAD7CD',
    };

function Show(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    // const myJSON = JSON.stringify(props.pokeBallBag)
    // console.log(props.pokemon.img)
    return (
        
        <div style={myStyle}>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h2>
            <img src={props.pokemon.img +".jpg"} alt={"Picture of "+ props.pokemon.name} />
            <br /><br />
            <a href="/pokemon">Back</a>
        </div>
    )
}

export default Show