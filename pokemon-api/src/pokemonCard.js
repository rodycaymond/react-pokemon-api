import React from 'react';

function PokemonCard (props) {

    return (
        <div className="pokemon-card">
            <div>
                <h4>{props.pokeInfo.name}</h4>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokeInfo.id + ".png"}></img>
            </div>
            <div>
                <h4>Types</h4>
                <p>{props.pokeInfo.types.map(each=>{return each.type.name + ' | ';})}</p>
                <h4>Stats</h4>
                <p>{props.pokeInfo.stats.map(each=>{return each.stat.name + ': ' + each.base_stat + ' | '})}</p>
                <h4>Abilities</h4>
                <p>{props.pokeInfo.abilities.map(each=>{return each.ability.name + ' | '})}</p>
            </div>
        </div>
    )
}

export default PokemonCard;


