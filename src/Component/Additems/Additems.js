import React, { Component } from 'react';
import './Additems.css'

class Additems extends Component {

    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length === 0 || this.state.age.length === 0){
            alert("Enter user")
        }else
            this.props.addUser(this.state)
        this.setState({
            name: '',
            age: ''
        })
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name" id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter age" id="age" onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="ADD"/>
                </form>
            </div>
        );
    }
}

export default Additems;