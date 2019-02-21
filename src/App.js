import React, { Component } from "react";
import "./style/App.css";
import Background from "./gameEngine/components/background/Background";
import BackgroundImg from "./game/resources/images/background.png";
import Bird from "./game/Bird";

class Game extends Component {
  constructor(props) {
    super(props);

    let playerArr = [new Bird()];

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

    return (
      <div>
      <Background
        height={1080}
        width={1920}
        speed={0.5}
        image={BackgroundImg}
        >{" "}
      </Background>{" "}
        {this.getObjects()}
      </div>
    );
  }
}

export default Game;
