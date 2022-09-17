import React, { Component } from 'react'
import "./Tag.css"

export default class Tag extends Component {

  glow =  this.props.glow ? "0 0 7px white" : "None"
  
  render() {
    return (
      <div className="tag" style={ { background: this.props.color, boxShadow: this.glow }   }>{this.props.name}</div>
    )
  }
}
