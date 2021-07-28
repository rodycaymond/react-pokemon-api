import logo from './logo.svg';
import './App.css';
import React from 'react';
import Select from 'react-select';
import Pokedex from './pokedex.js';
import NavItems from './navBar.js';
import MainBody from './mainbody.js';
import About from './about.js';
import PokemonCard from './pokemonCard.js';
import FilteredPokedex from './filteredPokedex.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import history from 'history/browser';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: [],
      pokemonId: undefined,
      pokemonCard: undefined,
      select: [{name: 'blank', url: 'https://pokeapi.co/api/v2/'}]
    }
    this.handlePokemonCard = this.handlePokemonCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => { this.setState({ pokedex: data.results }) });
  }

  handlePokemonCard(pokeId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokedex: this.state.pokedex,
          pokemonId: pokeId,
          pokemonCard: data,
          select: this.state.select
        })
 
      })
  }

  handleChange(event) {
    fetch(`https://pokeapi.co/api/v2/type/${event.value}?limit=151`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokedex: this.state.pokedex,
          pokemonId: this.state.pokemonId,
          pokemonCard: this.state.pokemonCard,
          select: data
        })
        console.log(this.state.select.name, this.state.select.pokemon[0].pokemon.url)
      })
  }
  render() {
    const options = [
      { value: 'bug', label: 'Bug' },
      { value: 'dragon', label: 'Dragon' },
      { value: 'electric', label: 'Electric' },
      { value: 'fighting', label: 'Fighting' },
      { value: 'fire', label: 'Fire' },
      { value: 'flying', label: 'Flying' },
      { value: 'ghost', label: 'Ghost' },
      { value: 'ground', label: 'Ground' },
      { value: 'grass', label: 'Grass' },
      { value: 'ice', label: 'Ice' },
      { value: 'normal', label: 'Normal' },
      { value: 'poison', label: 'Poison' },
      { value: 'pyschic', label: 'Pyschic' },
      { value: 'rock', label: 'Rock' },
      { value: 'water', label: 'Water' },
    ];


    return (
      <Router>
        <Switch>
          <div>
            <NavItems action={this.handleNav} />
            <h1>Scroll To Find Your Favorite Pokemon!</h1>
            <div className="filter-form">
              <p>Or filter them by their type!</p>
              <form>
                <Select onChange={this.handleChange} className="select" options={options} />
                <br></br>
                <Link className="filter-button" to={'/pokedex/'+this.state.select.name}>Filter!</Link>
                <br></br>
              </form>
            </div>
            <br></br>
            <div className="main-body">
              <Route exact path="/" render={props => <Pokedex pokedex={this.state.pokedex} pokemonCardFunction={this.handlePokemonCard} />} />
              <Route exact path="/pokedex" render={props => <Pokedex pokedex={this.state.pokedex} pokemonCardFunction={this.handlePokemonCard} />} />
              <Route exact path={"/pokedex/"+this.state.select.name} render={props => <FilteredPokedex name={this.state.select.name} pokedex={this.state.select.pokemon} pokemonCardFunction={this.handlePokemonCard} />} />
              <Route exact path="/about" component={About} />
              <Route exact path={"/pokedex/pokemon/" + this.state.pokemonId} render={props => <PokemonCard pokeInfo={this.state.pokemonCard} />} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }

}

export default App;
