import React, { Component } from 'react'
import Deck from './Deck/Deck'
import "./Skills.css"
import Logo from '../Logo/Logo'

export default class Skills extends Component {
  render() {
    return (
      <div className={"skills"}>
          <Logo />
          <Deck />
      </div>
    )
  }
}
