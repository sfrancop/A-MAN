import React, { Component } from 'react'
import "./RestauranteTarjeta.css"

export default class Header extends Component {

  divStyle = {
    backgroundImage: "url("+this.props.imagen+")",
    height: "110px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "32px"
  }

  render() {
    return (
      <div className='re-container' style={this.divStyle}>
        <div className="re-container-opacity" ></div>
        <p className='re-texto'>{this.props.nombre}</p>
      </div>
    )
  }
}
