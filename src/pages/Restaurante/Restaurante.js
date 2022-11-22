import React from 'react'
import { useParams } from 'react-router-dom'
import Restaurantes from "../../restaurantes.json"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import "./Restaurante.css"
import ListItem from '../../components/ListItem/ListItem'

const Restaurante = () => {
  const gastronomia = ["Comida rápida", "Postres", "Bebidas", "Tradicional", "Internacional", "Otros"]
  const espacio = ["Centro comercial", "Zona campestre", "Vía pública", "Otros"]
  const acondicionamiento = ["Rampas adecuadas", "Ascensores", "Parqueaderos azules", "Valet parking", "Vías de tránsito peatonal", "Tamaños de mesa diferentes", "Otros"]
  console.log(useParams());
  const {id} = useParams();
  const selectedRestaurant = Restaurantes.filter((Restaurante) => Restaurante.id == id);

  function inRestaurante(element){
    if(selectedRestaurant[0].gastronomia.indexOf(element)!=-1 || selectedRestaurant[0].espacio.indexOf(element)!=-1 || selectedRestaurant[0].acomodamiento.indexOf(element)!=-1){
      return <ListItem text={element} check={true}/>
    }else{
      return <ListItem text={element} check={false}/>
    }
  }

  return(
    <div>

    <div className='rest-header'><Header/></div>


    <div className='rest-margins'>
    
      <img className='rest-imagen' src={selectedRestaurant[0].imagen} alt="imagen de restaurante"></img>
      <p className='rest-title'>{selectedRestaurant[0].nombre}</p>
      <p><strong>Dirección:</strong> {selectedRestaurant[0].direccion}</p>
      <p><strong>Teléfono:</strong> {selectedRestaurant[0].telefono}</p>
    
      <div className='f-gastronomia-contenedor'>
            <p className='f-gastronomia-titulo'>Tipos de experiencias gastronómicas</p>
            <div className='f-gastronomia-items'>
            {
              gastronomia.map((element)=>(
                    inRestaurante(element)
              ))
            }
            </div>
          </div>

          <div className='f-espacios-contenedor'>
            <p className='f-espacios-titulo'>Tipos de espacios</p>
            <div className='f-espacios-items'>
              {
                espacio.map((element)=>(
                      inRestaurante(element)
                ))
              }
            </div>
          </div>

          <div className='f-acondicionamiento-contenedor'>
            <p className='f-acondicionamiento-titulo'>Acondicionamiento de espacios</p>
            <div className='f-acondicionamiento-items'>
              {
                acondicionamiento.map((element)=>(
                      inRestaurante(element)
                ))
              }
            </div>
          </div>

    </div>

    <br></br><br></br>

    <div className='rest-navbar'><Navbar/></div>

  </div>
  )
}

export default Restaurante;