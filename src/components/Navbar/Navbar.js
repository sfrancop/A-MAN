import React, { Component } from 'react'
import "./Navbar.css"
import  Profile  from "../../pictures/person.svg"
import  Home  from "../../pictures/house.svg"
import  Settings  from "../../pictures/gear.svg"

export default class Navbar extends Component {
  render() {
    return (
        <div className='n-container'>
            <div className='n-icons'>
                <img className='n-icons-icon' src={Profile} alt="profile icon"></img>
                <img className='n-icons-icon' src={Home} alt="home icon"></img>
                <img className='n-icons-icon' src={Settings} alt="settings icon"></img>
            </div>
        </div>
    )
  }
}
