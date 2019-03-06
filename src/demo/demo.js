import React, { Component } from "react";
import "../style/App.css";
import Box from "./objects/Box";
import WallButtom from "./objects/WallBottom";

class Demo extends Component {
  constructor(props) {
    super(props);
    var playerArr;
    playerArr = [
      new Box(100, 100, 100, 100),
      new WallButtom(200, 500, 800, 150)
    ];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0,
      input: "default",
      left: 6,
      gameRunning: true
    };

    requestAnimationFrame(this.gameLoop);
  }

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

      // checking for collision
      let player = this.state.playerArr[0];

      // generate random number between 200-700
      const min = 0;
      const max = 1280;
      const len = min + Math.random() * max;

      // only checking if player has collided with player2, player3 or player4
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let temp = this.state.playerArr;
        temp[index].len = len;
        this.setState({
          playerArr: temp
        });

        let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());

        if (
          hasPlayerCollided &&
          this.state.playerArr[index].getEntity().name === "Score box"
        ) {
          this.setState({
            score: this.state.score + 500
          });
          hasPlayerCollided = false;
        }

        //this.context.gap = len;
        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          // breaking for loop is player has collided and resetting game with new objects
          this.setState({ endGame: true });
          this.setState({ gameRunning: false });
          break;
        }
      }

      // updating every player
      /*
      this.state.playerArr.forEach(element => {
        element.update();
      });*/
      if (this.state.gameRunning === true) {
        this.setState({ showMenu: false });

        this.state.playerArr.forEach(element => {
          if (this.state.keyPressed === true) {
            element.update(this.state.input);
            this.setState({ keyPressed: false });
          } else {
            element.update();
          }
        });
      } else {
        this.setState({ showMenu: true });
      }
    }

    requestAnimationFrame(this.gameLoop);
  };

  // returning all the objects of the playerArr
  getObjects = () => {
    return this.state.playerArr.map(object => {
      return object.render();
    });
  };

  render() {
    var scalability = {
      position: "absolute",
      width: 1280,
      height: 640,
      overflow: "hidden"
    };
    return <div style={scalability}>{this.getObjects()}</div>;
  }
}

export default Demo;
