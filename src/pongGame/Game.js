import React, { useEffect, useRef } from "react";


const Game = props => {
  //To get Canvas DOM element, use useRef
  const canvasRef = useRef(null)
  const ballX = 100;
  const ballY = 100;
  const Ppaddle=225;
  const Cpaddle=225;
  const PScore=0;
  const CScore=0;

  const draw = ctx => {
    // added a ball
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(ballX, ballY, 5, 0, 2*Math.PI)
    ctx.fill()
    
    //Player Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(Ppaddle, 670, 50, 6)
    ctx.fill()

    //Computer Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(Cpaddle, 30, 50, 6)
    ctx.fill()

    //Center Line
    ctx.beginPath();
    ctx.setLineDash([4]);
    ctx.moveTo(0, 350);
    ctx.lineTo(500, 350);
    ctx.strokeStyle = "grey";
    ctx.stroke();

    //Score board
    ctx.font = "25px Arial";
    ctx. fillText(PScore, 15, 400);
    ctx. fillText(CScore, 15, 320);

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