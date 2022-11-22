import React, { Component } from 'react'
import "./Restaurantes.css"
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import RestauranteTarjeta from '../../components/RestauranteTarjeta/RestauranteTarjeta'
import Restaurantes from "../../restaurantes.json"

export class Ingreso extends Component {
  
  id = 1

  incId(){
    this.id = this.id + 1
  }

  render() {
    return (
      <div>

        <div className='res-header'><Header/></div>

        <div className='res-margins'>
        
          <p className='res-title'>Estas son las opciones que hemos elegido para ti</p>
          
            {
              Restaurantes.map((Restaurante)=>(
                <Link to={`/restaurantes/${Restaurante.id}`}>
                    <div id={this.id}>
                    {this.incId()}
                    <RestauranteTarjeta key={Restaurante.id} nombre={Restaurante.nombre} imagen={Restaurante.imagen}/>
                  </div>
                </Link>
              ))
            }

        </div>

        <br></br>

        <div className='res-navbar'><Navbar/></div>

      </div>

    )
  }
}

export default Ingreso