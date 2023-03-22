import React from 'react'

function New() {
    return ( 
        <div>
            <h1>Add New Pokemon</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="clr">Image Link:</label><br />
                <input type="text" id="img" name="img" defaultValue="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png"/><br /><br />


                <button>Submit</button>
            </form>
        </div>
    );
}

export default New;