import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ujjawal", age: 20 },
      { name: "Ujjwal", age: 21 },
      { name: "Ritik", age: 20 },
    ],
    showPersons : false,
  };

  switchName = (newName) => {
    //console.log('Was clicked!');
    //Don't do this: this.state.persons[0].name = 'KR$NA';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Ujjwal", age: 21 },
        { name: "Ritik", age: 19 },
      ],
    });
  };

  nameChanged = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: event.target.value, age: 21 },
        { name: "Ritik", age: 19 },
      ],
    });
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    })
  }

  render() {
    const style = {
      backgroundColor: "whitesmoke",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    return (
      <div className="App">
        <h1>Hello World, this is Iconik.</h1>
        { this.state.showPersons==true ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChanged}
          >
            He'll never have sex.
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchName.bind(this, "TALHA")}
          />
        </div> : null
        }
        <button style={style} onClick={this.togglePerson}>
          Toggle Person
        </button>
      </div>
    );
  }
}

export default App; 
