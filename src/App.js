import React, { Component } from "react";
import "./style/App.css";
import Player from "./game/Player";
import Player2 from "./game/Player2";
import Player3 from "./game/Player3";
import Player4 from "./game/player4";

class Game extends Component {
  constructor(props) {
    super(props);

    let playerArr = [new Player(), new Player2(), new Player3(), new Player4()];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0
    };

    // commencing the game loop
    requestAnimationFrame(this.gameLoop);
  }

  // this function is basically the game itself
  gameLoop = () => {
    let now = Date.now();
    let then = this.state.then;
    let interval = this.state.interval;
    let delta = this.state.delta;

    delta = now - then;

    // restricting fps
    if (delta > interval) {
      then = now - (delta % interval);
      this.setState({ then: then });

      // updating every player
      this.state.playerArr.forEach(element => {
        element.update();
      });

      // checking for collision
      let player = this.state.playerArr[0];

      // only checking if player has collided with player2, player3 or player4
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let check = player.getCollisionDetection().checkForCollision(this.state.playerArr[index].getEntity());

        // if a collision is detected, checkForCollision() returns true
        if (check === true) {
          console.log('COLLISION DETECTED!')
        }
      }

      // forcing this component to update
      this.forceUpdate();
    }

    requestAnimationFrame(this.gameLoop);
  };

  // returning all the objects of the playerArr
  getObjects = () => {
    return (
      this.state.playerArr.map((object) => {
        return (
          object.render()
        )
      })
    )
  }

  render() {
    let divStyle = {
      height: 1100,
      width: 1100,
      background: "red",
      position: "absolute"
    };

    return (
      <div style={divStyle}>
        {this.getObjects()}
      </div>
    );
  }
}

export default Game;
