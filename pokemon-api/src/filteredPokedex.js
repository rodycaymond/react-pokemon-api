import React from 'react';
import Pokemon from './pokemon.js';
import { Route, Link } from 'react-router-dom';

function FilteredPokedex (props) {

    let pokemon = props.pokedex.map(item=>{
        let name = item.name;
        let arr = item.url.split('/');
        let id = Number(arr[arr.length-1]);
        return <Pokemon pokemonCardFunction={props.pokemonCardFunction} pokeName={name} id={id}/>
    })
    return (
        <Link to={"/pokedex/"+props.name}>
            <ul className="pokemon-flex">
                {pokemon}
            </ul>
        </Link>
    )
}

export default FilteredPokedex;