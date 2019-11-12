import React, {Component} from 'react';
//import React from 'react'

//class ClassComponent extends React.Component
//export default class ClassComponent..
class ClassComponent extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Matt',
            age: 27
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        this.setState({
           name: 'Matias' 
        })
    }

    render(){
        return(
            <div className='class-component-container'>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default ClassComponent;