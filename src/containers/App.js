import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePerson}
          changed= {this.nameChanged} 
          />
      );
    }

    

    return (
      <div className={classes.App}>
        <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePerson}
        />
        {persons}
      </div>
    );
  }
}

export default App;
