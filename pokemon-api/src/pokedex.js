import React from 'react';
import Pokemon from './pokemon.js'

class Pokedex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokedex: true,
            pokeInfo: {}
        }
        this.handlePokemonClick = this.handlePokemonClick.bind(this);
    }

    handlePokemonClick(data){
        fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                pokedex: !this.state.pokedex,
                pokeInfo: data
            })
        })
        
        console.log(this.state.pokeInfo);
    }

    render(){
        let pokemon = this.props.pokedex.map((item,index)=>{
            return <Pokemon action={this.handlePokemonClick} key={index} pokeName={item.name} id={index+1}/>
        })
        if (this.state.pokedex){
            return (
                <div>
                    <ul className="pokemon-flex">
                        {pokemon}
                    </ul>
                </div>
            )
        } else if (!this.state.pokedex){
            return (
                <div className="pokemon-card">
                    <div>
                        <h4>{this.state.pokeInfo.name}</h4>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.state.pokeInfo.id + ".png"}></img>
                    </div>
                    <div>
                        <h4>Types</h4>
                        <p>{this.state.pokeInfo.types.map(each=>{return each.type.name + ' | ';})}</p>
                        <h4>Stats</h4>
                        <p>{this.state.pokeInfo.stats.map(each=>{return each.stat.name + ': ' + each.base_stat + ' | '})}</p>
                        <h4>Abilities</h4>
                        <p>{this.state.pokeInfo.abilities.map(each=>{return each.ability.name + ' | '})}</p>
                    </div>
                </div>
            )
        }
    }
}

export default Pokedex;