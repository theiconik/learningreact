import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Ujjawal', age: 20},
      {name: 'Ujjwal', age: 21},
      {name: 'Ritik', age: 20}
    ]
  }

  switchName = () => {
    console.log('Was clicked!');
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello World, this is Iconik.</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>He'll never have sex.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <button onClick={this.switchName}>Switch Name</button>
      </div>
    );
  }
}

export default App;
