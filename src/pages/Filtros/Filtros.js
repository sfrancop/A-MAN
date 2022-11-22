import React, { Component } from 'react'
import "./Filtros.css"
import Header from '../../components/Header/Header'
import ListItem from '../../components/ListItem/ListItem'
import  Arrow  from "../../pictures/arrow-right.svg"
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

export class Ingreso extends Component {
  render() {
    return (
      <div>

        <div className='f-header'><Header/></div>

        <div className='f-margins'><Header/>
        
          <p className='f-title'>¿Cómo deseas filtrar hoy tu experiencia?</p>
          
          <div className='f-gastronomia-contenedor'>
            <p className='f-gastronomia-titulo'>Tipos de experiencias gastronómicas</p>
            <div className='f-gastronomia-items'>
              <div className='f-gastronomia-items-item'><ListItem text="Comida rápida"/></div>
              <div className='f-gastronomia-items-item'><ListItem text="Postres"/></div>
              <div className='f-gastronomia-items-item'><ListItem text="Bebidas"/></div>
              <div className='f-gastronomia-items-item'><ListItem text="Tradicional"/></div>
              <div className='f-gastronomia-items-item'><ListItem text="Internacional"/></div>
              <div className='f-gastronomia-items-item'><ListItem text="Otros"/></div>
            </div>
          </div>

          <div className='f-espacios-contenedor'>
            <p className='f-espacios-titulo'>Tipos de espacios</p>
            <div className='f-espacios-items'>
              <div className='f-espacios-items-item'><ListItem text="Centro comercial"/></div>
              <div className='f-espacios-items-item'><ListItem text="Zona campestre"/></div>
              <div className='f-espacios-items-item'><ListItem text="Vía pública"/></div>
              <div className='f-espacios-items-item'><ListItem text="Otros"/></div>
            </div>
          </div>

          <div className='f-acondicionamiento-contenedor'>
            <p className='f-acondicionamiento-titulo'>Acondicionamiento de espacios</p>
            <div className='f-acondicionamiento-items'>
              <div className='f-acondicionamiento-items-item'><ListItem text="Ramas adecuadas"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Ascensores"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Parqueaderos azules"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Valet parking"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Vías de tránsito peatonal de fácil acceso"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Tamaños de mesa diferentes"/></div>
              <div className='f-acondicionamiento-items-item'><ListItem text="Otros"/></div>
            </div>
          </div>

          <Link to="/restaurantes"><img className='f-button' src={Arrow} alt="logo"></img></Link>

        </div>

        <br></br>

        <div className='f-navbar'><Navbar/></div>

      </div>

    )
  }
}

export default Ingreso