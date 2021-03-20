import React from 'react';
import './person.css';
import  Radium  from "radium";

const person = (props) => {
   return (
      <div className="Person" onClick={props.click}>
         <p>I'm {props.name} . And I am {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
      </div>
   )
}

export default Radium(person);