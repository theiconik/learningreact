import React from 'react';
import classes from './person.css';
//import  Radium  from "radium";
//import styled from "styled-components";

// const StyledDiv = styled.div`
//       width: 60%;
//       margin: 16px auto;
//       border: 1px solid #eee;
//       box-shadow: 0 2px 3px #ccc;
//       padding: 16px;
//       text-align: center; 

//    @media (min-width: 500px) {
//       width: 450px; 
//    }
// `;

const person = (props) => {
   // const style =  {
   //    '@media (min-width: 500px)': {
   //       width: '450px',
   //    }
   // }
   return (
      <div className={classes.Person} onClick={props.click} /*style={style}*/>
         <p>I'm {props.name} . And I am {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
      </div>
   )
}

export default person;