import React, { Component } from 'react'
import  Logo  from "../../pictures/logo.svg"
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <div>
        <img className='he-logo' src={Logo} alt="logo"></img>
      </div>
    )
  }
}
