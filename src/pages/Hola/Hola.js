import React, { Component } from 'react'
import "./Hola.css"
import  Arrow  from "../../pictures/arrow-right.svg"
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
var extUid;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.email;
    extUid = uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export class Ingreso extends Component {
  render() {
    return (
      <div>
        <div className='h-text'>
          <p className='h-hi'>Hola,</p>
          <p className='h-name'>{extUid}</p>
        </div>
        <Link to="/filtros"><img className='h-button' src={Arrow} alt="logo"></img></Link>
      </div>
    )
  }
}

export default Ingreso