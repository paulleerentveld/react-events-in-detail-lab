// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {

onDelayedClickHandler = (e) => {
  //console.log(e)
  e.persist();
  return setTimeout(() => this.props.onDelayedClick(e),this.props.delay); 
  //return setTimeout(() => this.props.onDelayedClick(e.target),this.props.delay) 
}


  render() {
    return <button onClick={this.onDelayedClickHandler} >Delayed Button</button>
  }
}