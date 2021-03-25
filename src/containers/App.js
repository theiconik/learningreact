import React, { Component } from "react";
import classes from "./App.css";
//import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";


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
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Ujjwal", age: 21 },
        { name: "Ritik", age: 19 },
      ],
    });
  };

  nameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
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
    const p = [...this.state.persons]; //Creating copy
    p.splice(personIndex, 1);
    this.setState({
      persons: p,
    });
  };

  render() {
    let btnClass = [classes.Button];

    let personsvar = null;

    if (this.state.showPersons) {
      personsvar = (
        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePerson}
          changed= {this.nameChanged} 
          />
        </div>
      );

      btnClass.push(classes.Red);
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(" ")}>Hello World, this is Iconik.</h1>
        <button className={btnClass.join(' ')} alt={this.state.showPersons} /*style={style}*/ onClick={this.togglePerson}>
          Toggle Person
        </button>
        {personsvar}
      </div>
    );
  }
}

export default App;