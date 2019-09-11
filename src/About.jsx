import React from 'react'
import IMG_0264 from './IMG_0264.JPG';

export default function About() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="my-pic">
        <img src={IMG_0264}  alt="AZardis"/>
      </div><br/>
      <p>My name is Anthony Zardis I am a junior web developer!</p>
      <p>Me PacMan</p>
    </div>
  )
}
