import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World, this is Iconik.</h1>
        <Person name="Ujjawal" age="20"/>
        <Person name="Ujjwal" age="21">He'll never have sex.</Person>
        <Person name="Ritik" age="20"/>
      </div>
    );
  }
}

export default App;
