import React from 'react';
import { Route, Link } from 'react-router-dom';

class NavItems extends React.Component {
    constructor(props){
        super(props);
        this.content = ['PokeDex', 'About Us'];
        this.paths = ["/pokedex", "/about"];
    }

    render(){
        let navInfo = this.content.map((each,index)=>{
            return <Nav path={this.paths[index]} content={each}/>
        })
        return (
            <div className="top-bar">
                {navInfo}
            </div>
        )
    }
}

function Nav (props) {

    
    return (
        <Link to={props.path} className="navvy">{props.content}</Link>
    )
}

export default NavItems;

