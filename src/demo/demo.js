import React, { Component } from "react";
import "../style/App.css";
import Box from "./objects/Box";
import WallBottom from "./objects/WallBottom";
import WallRight from "./objects/WallRight";
import WallTop from "./objects/WallTop";
import WallLeft from "./objects/WallLeft";

class Demo extends Component {
  constructor(props) {
    super(props);
    var playerArr;
    playerArr = [
      new Box(10, 500, 300, 300),
      new WallBottom(0, 1280, -1, 1280),
      new WallTop(0, 0, 1, 1280),
      new WallRight(1280, 0, 1280, -1),
      new WallLeft(0, 0, 1280, 1)
    ];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0,
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

      // only checking if player has collided with walls
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());

        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          let placeholder = this.state.playerArr;
          if (this.state.playerArr[index].getEntity().name === "wall top") {
            placeholder[0]
              .getPhysics()
              .setTop(this.state.playerArr[0].getPhysics().getTop() * -1);
          }
          if (this.state.playerArr[index].getEntity().name === "wall right") {
            placeholder[0]
              .getPhysics()
              .setLeft(this.state.playerArr[0].getPhysics().getLeft() * -1);
          }
          if (this.state.playerArr[index].getEntity().name === "wall bottom") {
            placeholder[0]
              .getPhysics()
              .setTop(this.state.playerArr[0].getPhysics().getTop() * -1);
          }
          if (this.state.playerArr[index].getEntity().name === "wall left") {
            placeholder[0]
              .getPhysics()
              .setLeft(this.state.playerArr[0].getPhysics().getLeft() * -1);
          }          
        }
      }
      // updating every player
      this.state.playerArr.forEach(element => {
        element.update();
      });    
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
      background: "#AAA",
      position: "absolute",
      width: 1280,
      height: 1280,
      overflow: "hidden"
    };
    return <div style={scalability}>{this.getObjects()}</div>;
  }
}

export default Demo;
