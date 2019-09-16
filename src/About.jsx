import React from 'react'
import Azardis from './pictures/Azardis.JPG';

export default function About() {
  return (
    <>
      <div>
        <h1>About Anthony</h1>
        <div className="my-pic">
          <img src={Azardis}  
              alt="AZardis"
              style={{width: 300,
                      height: 400 }} />
        </div><br/>
      </div>
      <div className="about-me">
        <p>My name is Anthony Zardis I am a junior web developer!</p>  
      </div>
    </>
  )
}
