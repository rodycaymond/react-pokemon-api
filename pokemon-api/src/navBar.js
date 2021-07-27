import React from 'react';

class NavItems extends React.Component {
    constructor(props){
        super(props);
        this.content = ['PokeDex', 'About Us'];
    }

    render(){
        let navInfo = this.content.map((each,index)=>{
            return <Nav action={this.props.action} id={index} content={each}/>
        })
        return (
            <div className="top-bar">
                {navInfo}
            </div>
        )
    }
}

function Nav (props) {

    function handleClick(){
        props.action(props.id);
    }
    return (
        <p onClick={handleClick}>{props.content}</p>
    )
}

export default NavItems;