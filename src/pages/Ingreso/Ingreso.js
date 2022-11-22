import React, { Component } from 'react'
import "./Ingreso.css"
import  logo  from "../../pictures/logo.svg"
import { Link } from 'react-router-dom'

export class Ingreso extends Component {
  render() {
    return (
      <div>
        <div className='i-logo-imagen'> <img src={logo} alt="logo"></img> </div>
        <p className='i-logo-nombre'>A-MAN</p>
        <div className='i-form-container'>
          <form className='i-form'>
            <input type="email" className='i-form-mail' placeholder='Correo'></input>
            <input type="password" className='i-form-password' placeholder='Contraseña'></input>
            <Link to="/hola">
              <button className='i-form-submit'>
                <span className='i-form-submit-button-text'>Continuar</span>
              </button>
            </Link>
            <p className='i-form-submit-text'>para disfrutar de una experiencia segura.</p>
          </form>
        </div>
        <br></br><p className='i-p-registro'>¿No tienes una cuenta? <Link to="/registro">Registrate.</Link></p>
      </div>
    )
  }
}

export default Ingreso