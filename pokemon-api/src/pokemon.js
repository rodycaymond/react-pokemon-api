import React from 'react';

function Pokemon (props) {

    function handleClick(){
        props.action(props.id);
    }

    return (
        <div className="pokemon-preview" onClick={handleClick}>
            <h4>{props.pokeName}</h4>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.id + ".png"}></img>
        </div>
    );
}

export default Pokemon;