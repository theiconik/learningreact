import React from 'react';
import classes from './person.css';
//import  Radium  from "radium";
//import styled from "styled-components";

const person = (props) => {
   
   return (
      <div className={classes.Person} onClick={props.click} /*style={style}*/>
         <p>I'm {props.name} . And I am {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
      </div>
   )
}

export default person;