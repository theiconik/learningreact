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
    showPersons: false,
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
    });
  };

  deletePerson = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState(
      {
        persons : persons,
      }
    )
  }

  render() {
    const style = {
      backgroundColor: "whitesmoke",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePerson(index)} 
            />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World, this is Iconik.</h1>

        <button style={style} onClick={this.togglePerson}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
