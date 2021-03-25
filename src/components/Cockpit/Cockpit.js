import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
   let btnClass= '';
   if(props.showPersons) {
      btnClass = classes.Red;
   }

   const assignedClasses = [];
   if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
   } 

   if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
   }

   return (
      <div className={classes.Cockpit}>
         <h1 className={assignedClasses.join(" ")}>Hello World, this is Iconik.</h1>
         <button className={btnClass} alt={props.showPersons} /*style={style}*/ onClick={props.clicked}>
         Toggle Person
         </button>
      </div>
   );
}

export default Cockpit;