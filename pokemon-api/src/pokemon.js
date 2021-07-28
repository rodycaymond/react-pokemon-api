import React from 'react';
import { Route, Link } from 'react-router-dom';

function Pokemon (props) {

    function handleClick(){
        props.pokemonCardFunction(props.id);
    }


    return (
        <Link to={'pokedex/pokemon/'+props.id} onClick={handleClick} className="pokemon-preview" >
            <h4>{props.pokeName}</h4>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.id + ".png"}></img>
        </Link>
    );
}

export default Pokemon;

