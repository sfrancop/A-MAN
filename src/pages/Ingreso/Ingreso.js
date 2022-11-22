import React, { Component } from 'react'
import "./Ingreso.css"
import  logo  from "../../pictures/logo.svg"
import { Link } from 'react-router-dom'
import firebaseApp from '../../firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(firebaseApp);

export class Ingreso extends Component {

  async submitHandler(e){
    e.preventDefault();
    try{
      const mail = e.target.elements.mail.value;
      const password = e.target.elements.password.value;
      await signInWithEmailAndPassword(auth, mail, password).then((userCredential)=>{
        return userCredential
      });
      document.getElementById("submitButton").click();
    } catch(error){
      document.getElementById("submitButton-Text").textContent = "Credenciales incorrectas, intente de nuevo.";
    }
  }

  render() {
    return (
      <div>
          <div>
            <div className='i-logo-imagen'> <img src={logo} alt="logo"></img> </div>
            <p className='i-logo-nombre'>A-MAN</p>
            <div className='i-form-container'>
              <form className='i-form' onSubmit={this.submitHandler}>
                <input id="mail" type="email" className='i-form-mail' placeholder='Correo'></input>
                <input id="password" type="password" className='i-form-password' placeholder='Contraseña'></input>
                <p id="submitButton-Text"></p>
                  <button className='i-form-submit'>
                    <p className='i-form-submit-button-text'>Continuar</p>
                  </button>
                  <p className='i-form-submit-text'>para disfrutar de una experiencia segura.</p>
                  <br></br>
                  <p className='i-p-registro'>¿No tienes una cuenta? <Link to="/registro"><strong><p className='i-p-registro-link'> Registrate.</p></strong></Link></p>
                  <Link to="/filtros">
                    <button id='submitButton' className='i-form-submit i-form-submit-hide'>
                      <p>Continuar</p>
                    </button>
                  </Link>
              </form>
            </div>
            <br></br>
          </div>
      </div>
    )
  }
}

export default Ingreso