import React from 'react';
import Connect4 from './pictures/Connect4.png';
import marvel from './pictures/marvel.png';
import CocktailTime from './pictures/CocktailTime.png';
import LegoPic from './pictures/LegoPic.png';

export default function Home() {
  return (
    <div className="home-page-projects">
      <div className="connect-4">
        <a href="https://aqueous-dawn-50169.herokuapp.com/">Connect 4
        <img src={Connect4} 
             alt="connect4" 
             style={{width: 600,
                     height: 350 }} /></a><br/>
      </div>
      <div className="marvel">
        <a href="https://mighty-forest-98512.herokuapp.com/">Hero Collection
        <img src={marvel} 
             alt="marvel-app" 
             style={{width: 600,
                     height: 350 }} /></a><br/>
      </div><br/>
      <div className="cocktail-time">
        <a href="https://desolate-coast-19668.herokuapp.com/">Cocktail Time
        <img src={CocktailTime} alt="cocktails" 
                  style={{width: 600,
                          height: 350 }} /></a><br/>
      </div>
      <div className="lego">
        <a href="https://thawing-reef-47819.herokuapp.com/">Lego My Bricks
        <img src={LegoPic} 
             alt="legos" 
             style={{width: 600,
                     height: 350 }} /></a><br/>
      </div>
    </div>
  )
}
