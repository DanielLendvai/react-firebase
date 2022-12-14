import React from "react";

function Person({ name, height, mass }) {
    
    

    return (
        <div className="person">
            <h1>{name}</h1>
            <p>{height} CM</p>
            <p>{mass} KG</p>
        </div>
    );
}

export default Person;
