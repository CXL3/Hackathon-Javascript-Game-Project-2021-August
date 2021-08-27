import React, { useEffect, useRef } from "react";


const Game = props => {
  //To get Canvas DOM element, use useRef
  const canvasRef = useRef(null)

  const draw = ctx => {\
    // added two filled circles.
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(50, 100, 5, 0, 2*Math.PI)
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(100, 100, 5, 0, 2*Math.PI)
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