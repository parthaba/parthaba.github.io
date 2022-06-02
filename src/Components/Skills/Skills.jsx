import React, { Component } from 'react'
import Deck from './Deck/Deck'
import "./Skills.css"

export default class Skills extends Component {
  render() {
    return (
      <div className={"skills"}>
          <Deck />
      </div>
    )
  }
}
