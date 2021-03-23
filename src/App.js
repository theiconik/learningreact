import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./Error/ErrorBoundary";
//import Radium, { StyleRoot } from "radium";
//import styled from "styled-components";

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
//       }
// `;

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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };

    let btnClass = [classes.Button];

    let personsvar = null;

    if (this.state.showPersons) {
      personsvar = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                changed={(event) => this.nameChanged(event, person.id)}
              />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);

      //style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightred",
      //   color: "black",
      // };
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
    }

    return (
      //<StyleRoot>
      <div className={classes.App}>
        <h1 className={assignedClasses.join(" ")}>Hello World, this is Iconik.</h1>
        <button className={btnClass.join(' ')} alt={this.state.showPersons} /*style={style}*/ onClick={this.togglePerson}>
          Toggle Person
        </button>
        {personsvar}
      </div>
      //</StyleRoot>
    );
  }
}

export default App;
