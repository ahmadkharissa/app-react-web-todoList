import React, { Component } from 'react';
import Todoitems from './Component/Todoitems/Todoitems'
import Additems from './Component/Additems/Additems'
import './App.css';

class App extends Component {

  state = {
    users: [
      { id: 1, name: "ahmad", age: 23 },
      { id: 2, name: "mahdi", age: 22 },
      { id: 3, name: "mhamad", age: 24 }
    ]
  }

  deleteItem = (id) => {
    // let {users} = this.state;
    // let i = users.findIndex(user => user.id === id)
    // users.splice(i, 1)
    // this.setState({users})
    // or 
    let users = this.state.users.filter( user => {return user.id !== id} );
    this.setState({users})
  }

  addUser = (user) => {
    user.id = Math.random();
    let users = this.state.users;
    users.push(user);
    this.setState({users})
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <Todoitems users={this.state.users} deleteItem={this.deleteItem}/>
        <Additems addUser={this.addUser}/>
      </div>
    );
  }
}

export default App;
