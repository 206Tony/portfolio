import React from 'react';
import Connect4 from './Connect4.png';
import marvel from './marvel.png';
//import CocktailTime from './CocktailTime.png';
import LegoPic from './LegoPic.png';

export default function Home() {
  return (
    <div className="home-page-projects">
      <div className="connect-4">
        <a href="https://aqueous-dawn-50169.herokuapp.com/">Connect 4</a><br/>
        <img src={Connect4} alt="connect4" 
                  style={{width: 600,
                          height: 350 }} />
      </div>
      <div className="marvel">
        <a href="https://mighty-forest-98512.herokuapp.com/">Hero Collection</a><br/>
        <img src={marvel} alt="marvel-app" 
                  style={{width: 600,
                          height: 350 }} />
      </div>
      {/* <div className="cocktail-time">
        <a href="https://aqueous-dawn-50169.herokuapp.com/">Cocktail Ime</a><br/>
        <img src={CocktailTime} alt="cocktails" 
                  style={{width: 600,
                          height: 350 }} />*/}
      </div>
      <div className="lego">
        <a href="https://thawing-reef-47819.herokuapp.com/">Lego My Bricks</a><br/>
        <img src={LegoPic} alt="legos" 
                  style={{width: 600,
                          height: 350 }} /> 
      </div>
    </div>
  )
}
