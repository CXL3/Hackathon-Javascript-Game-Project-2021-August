import React, { Component } from "react";
import { Button } from "reactstrap";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
       ballX : 100,
       ballY : 100,
       Ppaddle:225,
       Cpaddle:225,
       PScore:0,
       CScore:0,
    };
  }  
  componentDidMount() {
    this.start();
}

  start() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    // added a ball
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(this.state.ballX, this.state.ballY, 5, 0, 2*Math.PI)
    ctx.fill()

    //Player Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(this.state.Ppaddle, 670, 50, 6)
    ctx.fill()

    //Computer Paddle 
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(this.state.Cpaddle, 30, 50, 6)
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
    ctx. fillText(this.state.PScore, 15, 400);
    ctx. fillText(this.state.CScore, 15, 320);

  }



  render() {
    return (
      <div>
        <Button id="gameStartButton" > Start the game </Button>
        
        <canvas id ="canvas" width="500" height="700"/>
      </div>
      
    );
  }
}
export default Game;   