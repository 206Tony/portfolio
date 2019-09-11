import React, { useState, useEffect } from 'react'

 function Game() {
  return (
    <div>
      <canvas 
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          alert(e.clientX)
        }}
      />
    </div>
  )
}

export default Game;