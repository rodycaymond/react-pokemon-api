import logo from './logo.svg';
import './App.css';
import React from 'react';
import Select from 'react-select';
import Pokedex from './pokedex.js';
import NavItems from './navBar.js';
import MainBody from './mainbody.js';
import About from './about.js';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      pokedex: [],
      compToRender: 0,
      select: undefined
    }
    this.handleNav = this.handleNav.bind(this);
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response=> response.json())
    .then(data=>{this.setState({pokedex: data.results})});
  }

  handleNav (data) {
    this.setState({
      pokedex: this.state.pokedex,
      compToRender: data,
      select: this.state.select
    })
  }
  handleChange(event){
    this.setState({
      pokedex: this.state.pokedex,
      compToRender: this.state.compToRender,
      select: event.target.value
    })
    setTimeout(()=>{console.log(this.state.select)}, 1000);
  }

  render(){
    let components = [<Pokedex pokedex={this.state.pokedex} />, <About />];
    const options = [
      {value: 'bug', label: 'Bug'},
      {value: 'dragon', label: 'Dragon'},
      {value: 'electric', label: 'Electric'},
      {value: 'fighting', label: 'Fighting'},
      {value: 'fire', label: 'Fire'},
      {value: 'flying', label: 'Flying'},
      {value: 'ghost', label: 'Ghost'},
      {value: 'ground', label: 'Ground'},
      {value: 'grass', label: 'Grass'},
      {value: 'ice', label: 'Ice'},
      {value: 'normal', label: 'Normal'},
      {value: 'poison', label: 'Poison'},
      {value: 'pyschic', label: 'Pyschic'},
      {value: 'rock', label: 'Rock'},
      {value: 'water', label: 'Water'},
    ];
    return (
      <div>
        <NavItems action={this.handleNav}/>
        <h1>Scroll To Find Your Favorite Pokemon!</h1>
        <div className="filter-form">
          <p>Or filter them by their type!</p>
          <form>
            <Select onChange={this.handleChange} className="select" options={options} />
            <br></br>
          </form>
        </div>
        <br></br>
          <div className="main-body">
            {components[this.state.compToRender]}
          </div>
      </div>
    );
  }
  
}

export default App;
