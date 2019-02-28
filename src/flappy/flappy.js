import React, { Component } from "react";
import "../style/App.css";
import Background from "../gameEngine/components/Background";
// import ResourceManager from "./gameEngine/components/resourceManager/ResourceManager";
import Bird from "./objects/Bird";
import ResourceManager from "../utils/ResourceManager";
import Pipe from "./objects/Pipe";
import Pipe1 from "./objects/Pipe1";
import Pipe2 from "./objects/Pipe2";
import Menu from "../gameEngine/components/Menu";
import HUD from "../utils/Hud";
import { AppContext } from "./context";

class Flappy extends Component {
  constructor(props) {
    super(props);

    let playerArr = [new Bird(), new Pipe(), new Pipe1(), new Pipe2()];

    this.state = {
      playerArr: playerArr.slice(),
      now: 0,
      then: Date.now(),
      interval: 1000 / 60,
      delta: 0,
      input: "default",
      keyPressed: false,
      endGame: false,
      score: 0,
      gameRunning: true,
      showMenu: true
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
        this.setState({
          playerArr: [new Bird(), new Pipe(), new Pipe1(), new Pipe2()],
          endGame: false
        });
      }

      // checking for collision
      let player = this.state.playerArr[0];

      // only checking if player has collided with player2, player3 or player4
      for (let index = 1; index < this.state.playerArr.length; index++) {
        let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());

        if (hasPlayerCollided) {
          if (this.state.playerArr[index].getEntity().name == "Score") {
            this.setState({
              score: this.state.score + 1
            });
            hasPlayerCollided = false;
          }
        }

        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          // breaking for loop is player has collided and resetting game with new objects
          this.setState({ endGame: true });
          this.setState({ gameRunning: false });
          break;
        }
      }

      // updating every player
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

      // when game is not running
      // if space is pressed, run the game
      if (this.state.keyPressed === true && this.state.gameRunning === false) {
        this.setState({ gameRunning: true });
        this.setState({ keyPressed: false });
      }

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
  getInput = e => {
    this.setState({ input: e.key, keyPressed: true });
  };

  render() {
    //    let img = new ResourceManager().getImageElement("background.png");
    var scalability = {
      position: "absolute",
      width: 1920,
      height: 1080,
      overflow: "hidden"
    };
    return (
      <div style={scalability}>
        <AppContext.Provider value={this.state}>
          <div onKeyDown={e => this.getInput(e)} tabIndex="0">
            <HUD score={this.state.score} position={"tc"} />{" "}
            <Background
              height={1080}
              width={1920}
              speed={0.5}
              image={ResourceManager.getImagePath("background.png")}
            >
              {" "}
            </Background>{" "}
            {this.getObjects()}
            <Menu showMenu={this.state.showMenu} />{" "}
          </div>
        </AppContext.Provider>
      </div>
    );
  }
}

export default Flappy;
