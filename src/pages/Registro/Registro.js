import React, { Component } from 'react'
import "./Registro.css"
import  logo  from "../../pictures/logo.svg"
import { Link } from 'react-router-dom'
import firebaseApp from '../../firebase-config'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {doc, getFirestore, setDoc} from "firebase/firestore"
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export class Ingreso extends Component {

  async submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const user = e.target.elements.user.value;
    const password = e.target.elements.password.value
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      return userCredential
    });
    const docuRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {usuario: user, correo: email, password: password});
    document.getElementById("button-text").textContent = "Cuenta creada";
  }
  
  render() {
    return (
      <div>
        <div className='r-logo-imagen'> <img src={logo} alt="logo"></img> </div>
        <p className='r-logo-nombre'>A-MAN</p>
        
        <div className='r-form-container'>
          <form className='r-form' onSubmit={this.submitHandler}>
            <input id='user' type="text" className='r-form-user' placeholder='Usuario'></input>
            <input id='email' type="email" className='r-form-mail' placeholder='Correo'></input>
            <input id='password' type="password" className='r-form-password' placeholder='Contraseña'></input>
              <button id="button" className='r-form-submit'>
                <p id='button-text' className='i-form-submit-button-text'>Registrarse</p>
              </button>
          </form>
        </div>
        <p className='r-p-registro'>¿Ya tienes una cuenta? <Link to="/"><strong><p className='r-p-registro-link'> Ingresa.</p></strong></Link></p>
      </div>
    )
  }
}

export default Ingreso