import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import './Deck.css'

const cards = [
  '/images/cards/Music-Card.png',
  '/images/cards/Debate-Speaking-Card.png',
  '/images/cards/Data-Analysis-Card.png',
  '/images/cards/Back-End-Card.png',
  '/images/cards/Front-End-Card.png'
]

const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={"deck"} key={i} style={{ x, y }}>
          <animated.div className={"noSwipingClass"}
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }}
          />
        </animated.div>
      ))}
      <div style={{ transform: `translate(-600px, 50px) scale(0.9)`}}>
        <div className='left-card' style={{ transform: `perspective(1500px) rotateX(30deg) rotateY(0deg) rotateZ(-30deg)`}}>
          Skills
        </div>
      </div>
      <div style={{ transform: `translate(-650px, -300px) scale(0.9)`}}>
        <div className='left-card' style={{ transform: `perspective(1500px) rotateX(30deg) rotateY(0deg) rotateZ(-20deg)`}}>
          Throw the Deck
        </div>
      </div>
      <div style={{ transform: `translate(18vw, -450px) scale(0.85)`}}>
        <div className='left-card' style={{ transform: `perspective(1500px) rotateX(30deg) rotateY(0deg) rotateZ(40deg)`}}>
          Skills
        </div>
      </div>
      <div style={{ transform: `translate(20vw, -600px) scale(0.85)`}}>
        <div className='left-card' style={{ transform: `perspective(1500px) rotateX(30deg) rotateY(0deg) rotateZ(-50deg)`}}>
          Skills
        </div>
      </div>
    </>
  )
}
