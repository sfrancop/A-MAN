import React, { Component } from 'react'
import "./Hola.css"
import  Arrow  from "../../pictures/arrow-right.svg"
import { Link } from 'react-router-dom'

export class Ingreso extends Component {
  render() {
    return (
      <div>
        <div className='h-text'>
          <p className='h-hi'>Hola,</p>
          <p className='h-name'>Gabriela.</p>
        </div>
        <Link to="/filtros"><img className='h-button' src={Arrow} alt="logo"></img></Link>
      </div>
    )
  }
}

export default Ingreso