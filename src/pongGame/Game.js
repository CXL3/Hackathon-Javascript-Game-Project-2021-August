import React, { useEffect, useRef } from "react";


const Game = props => {
  //To get Canvas DOM element, use useRef
  const canvasRef = useRef(null)

  const draw = ctx => {
    // added a ball
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(50, 100, 5, 0, 2*Math.PI)
    ctx.fill()
    
    //Player Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(100, 670, 50, 6)
    ctx.fill()

    //Computer Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(100, 30, 50, 6)
    ctx.fill()

  }

  //this is to  get the context, useEffect let us call the functions right after  the component did mount
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    draw(context)
  }, [draw])

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="board"
        width="500"
        height="700"
      />
    </div>
  );

}

export default Game;   