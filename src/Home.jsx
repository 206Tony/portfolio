import React from 'react';
import Connect4 from './pictures/Connect4.png';
import marvel from './pictures/marvel.png';
import CocktailTime from './pictures/CocktailTime.png';
import LegoPic from './pictures/LegoPic.png';

export default function Home() {
  return (
    <>
    <div className="projects">
      <div className="apps, applink-connect">
        <a href="https://aqueous-dawn-50169.herokuapp.com/">
        <img src={Connect4} 
             alt="connect4" 
             style={{width: 600,
                     height: 350 }} /></a>
      </div>
      <div className="apps, applink-marvel">
        <a href="https://mighty-forest-98512.herokuapp.com/">
        <img src={marvel} 
             alt="marvel-app" 
             style={{width: 600,
                     height: 350 }} /></a>
      </div>
      <div className="apps, applink-drinks">
        <a href="https://desolate-coast-19668.herokuapp.com/">
        <img src={CocktailTime} 
             alt="cocktails" 
             style={{width: 600,
                     height: 350 }} /></a>
      </div>
      <div className="apps, applink-lego">
        <a href="https://thawing-reef-47819.herokuapp.com/">
        <img src={LegoPic} 
             alt="legos" 
             style={{width: 600,
                     height: 350 }} /></a>
      </div>
    </div>
    </>
  )
}
