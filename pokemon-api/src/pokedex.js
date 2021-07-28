import React from 'react';
import Pokemon from './pokemon.js'

class Pokedex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokedex: true,
            pokeInfo: {}
        }
    }
    
    render(){
        let pokemon = this.props.pokedex.map((item,index)=>{
            return <Pokemon pokemonCardFunction={this.props.pokemonCardFunction} key={index} pokeName={item.name} id={index+1}/>
        })
        return (
            <div>
                <ul className="pokemon-flex">
                    {pokemon}
                </ul>
            </div>
        )
    }
}

export default Pokedex;