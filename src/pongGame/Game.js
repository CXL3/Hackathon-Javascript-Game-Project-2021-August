import React, { useEffect, useRef } from "react";


const Game = props => {
  //To get Canvas DOM element, use useRef
  const canvasRef = useRef(null)

  //this is to  get the context, useEffect let us call the functions right after  the component did mount
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw

  }, [])
  

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