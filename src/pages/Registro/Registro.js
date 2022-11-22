import React, { Component } from 'react'
import "./Registro.css"
import  logo  from "../../pictures/logo.svg"
import { Link } from 'react-router-dom'

export class Ingreso extends Component {
  render() {
    return (
      <div>
        <div className='r-logo-imagen'> <img src={logo} alt="logo"></img> </div>
        <p className='r-logo-nombre'>A-MAN</p>
        <div className='r-form-container'>
          <form className='r-form'>
          <input type="text" className='r-form-user' placeholder='Correo'></input>
            <input type="email" className='r-form-mail' placeholder='Correo'></input>
            <input type="password" className='r-form-password' placeholder='Contraseña'></input>
            <Link to="/">
              <button className='r-form-submit'>
                <span className='r-form-submit-button-text'>Registrarse</span>
              </button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Ingreso