import React, { Component } from 'react'
import "./ListItem.css"
import Square from "../../pictures/square.svg"
import SquareCheck from "../../pictures/check-square.svg"

export default class ListItem extends Component {


  setSquare(){
    if(this.props.check){
      this.selectedSquare = SquareCheck;
    }else{
      this.selectedSquare = Square;
    }
  }

  selectedSquare;

  square = {
    border: "1px solid #464646",
    borderRadius: "4px",
    minWidth: "18px",
    height: "18px",
    marginRight: "9px",
  }
  render() {
    return (
      <div className='l-container'>
        {this.setSquare()}
        <img src={this.selectedSquare} alt="check box" style={this.square}/>
        {this.props.text}
      </div>
    )
  }
}
