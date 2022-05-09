// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {

handleClick = (event) => {
    //console.log(event.clientX,event.clientY)
    let arr = [];
    arr = [event.clientX,event.clientY];
    //console.log(arr);
    return this.props.onReceiveCoordinates(arr);
}

  render() {
    return <button onClick={this.handleClick} >Coordinates Button</button>
  }
}