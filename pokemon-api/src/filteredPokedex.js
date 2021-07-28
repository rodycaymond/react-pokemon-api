import React from 'react';
import Pokemon from './pokemon.js';
import { Route, Link } from 'react-router-dom';

function FilteredPokedex (props) {

    let pokemon = props.pokedex.map(item=>{
        let name = item.pokemon.name;
        let arr = item.pokemon.url.split('/');

        let id = Number(arr[arr.length-2]);
        
        return <Pokemon pokemonCardFunction={props.pokemonCardFunction} pokeName={name} id={id}/>
    })
    return (
        <div>
            <ul className="pokemon-flex">
                {pokemon}
            </ul>
        </div>
    )
}

export default FilteredPokedex;