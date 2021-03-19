import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aaaa1", name: "Ujjawal", age: 20 },
      { id: "ajha1", name: "Ujjwal", age: 21 },
      { id: "aiua1", name: "Ritik", age: 20 },
    ],
    showPersons: false,
  };

  switchName = (newName) => {
    //console.log('Was clicked!');
    //Don't do this: this.state.persons[0].name = 'KR$NA';
    this.setState({
      persons: [
        {  name: newName, age: 30 },
        {  name: "Ujjwal", age: 21 },
        {  name: "Ritik", age: 19 },
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
    //const persons = this.state.persons.slice();
    const p= [...this.state.persons] //Creating copy 
    p.splice(personIndex, 1);
    this.setState(
      {
        persons : p,
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

    let personsvar = null;

    if (this.state.showPersons) {
      personsvar = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePerson(index)}
            key={person.id}
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
        {personsvar}
      </div>
    );
  }
}

export default App;
