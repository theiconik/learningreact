import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import  Radium  from "radium";

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

  nameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({
      persons: persons
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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor : "lightgreen",
        color : "black",
      } 
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
            changed= {(event) => this.nameChanged(event, person.id)}
            />;
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor : 'lightred',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']

    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');  // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hello World, this is Iconik.</h1>
        <button style={style} onClick={this.togglePerson}>
          Toggle Person
        </button>
        {personsvar}
      </div>
    );
  }
}

export default Radium(App);
