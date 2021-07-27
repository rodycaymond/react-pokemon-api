import React from 'react';
import Pokedex from './pokedex.js';
import About from './about.js';

class MainBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            componentToRender: this.props.navComp,
            components: [<Pokedex pokedex={this.props.pokedex} />, <About />]
        }
    }

    render(){
        return (
            <div className="main-body">
                {this.state.components[this.state.componentToRender]}
            </div>
        )
    }
}

export default MainBody;