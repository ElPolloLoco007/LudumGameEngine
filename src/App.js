import React, { Component } from "react";
import "./style/App.css";
import Background from "./gameEngine/components/background/Background";
//import ResourceManager from "./gameEngine/components/resourceManager/ResourceManager";
import Bird from "./game/objects/Bird";
import backgroundImg from "./game/resources/images/background.png";
import Pipe from "./game/objects/Pipe";
import Pipe1 from "./game/objects/Pipe1";
import Pipe2 from "./game/objects/Pipe2";
import Menu from "./gameEngine/components/menu/menu";
class Game extends Component {
  constructor(props) {
    super(props);

    let playerArr = [new Bird(), new Pipe(), new Pipe1(), new Pipe2()];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0,
      input: 'default',
      keyPressed: false,
      endGame: false
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

      // restart game / end game
      if (this.state.endGame === true) {
        this.setState({ playerArr: [new Bird(), new Pipe(), new Pipe1(), new Pipe2()], endGame: false })
      }

      // checking for collision
      let player = this.state.playerArr[0];

      // only checking if player has collided with player2, player3 or player4
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());

        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          // breaking for loop is player has collided and resetting game with new objects
          this.setState({ endGame: true })
          break;
        }
      }

      // updating every player
      this.state.playerArr.forEach(element => {
        if (this.state.keyPressed === true) {
          element.update(this.state.input);
          this.setState({ keyPressed: false })
        } else {
          element.update();
        }
      });

      // forcing this component to update
      //this.forceUpdate();
    }

    requestAnimationFrame(this.gameLoop);
  };

  // returning all the objects of the playerArr
  getObjects = () => {
    return this.state.playerArr.map(object => {
      return object.render();
    });
  };

  // getting the input from the main div
  getInput = (e) => {
    this.setState({ input: e.key, keyPressed: true })
  }

  render() {
    //    let img = new ResourceManager().getImageElement("background.png");
    return (
      <div onKeyDown={e => this.getInput(e)} tabIndex="0">
        <Background
          height={1080}
          width={1920}
          speed={0.5}
          image={backgroundImg}
        >
          {" "}
        </Background>{" "}
        {this.getObjects()}
        <Menu />
      </div>
    );
  }
}

export default Game;
