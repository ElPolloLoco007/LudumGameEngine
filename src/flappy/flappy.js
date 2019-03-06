import React, { Component } from "react";
import "../style/App.css";
import Background from "../gameEngine/components/Background";
import Bird from "./objects/Bird";
import ResourceManager from "../utils/ResourceManager";
import Pipe from "./objects/Pipe";
import Pipe1 from "./objects/Pipe1";
import ScoreBox from "./objects/ScoreBox";
import Menu from "../gameEngine/components/Menu";
import HUD from "../utils/Hud";
import { AppContext } from "./context";
import LoggerManager from "../utils/LoggerManager";
import Logger from "../utils/Logger";

class Flappy extends Component {
  constructor(props) {
    super(props);
    var playerArr;
    playerArr = [
      new Bird(),
      new Pipe(200, 1080 - 500, 800, 150),
      new Pipe1(200, -500, 800, 150),
      new ScoreBox(200, 1080 - 500 - 280, 280, 150),
      new Pipe(800, 1080 - 500, 800, 150),
      new Pipe1(800, -500, 800, 150),
      new ScoreBox(800, 1080 - 500 - 280, 280, 150),
      new Pipe(1400, 1080 - 500, 800, 150),
      new Pipe1(1400, -500, 800, 150),
      new ScoreBox(1400, 1080 - 500 - 280, 280, 150)
    ];

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
      gap: 200 + Math.random() * 500,
      left: 6,
      gameRunning: false,
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
          playerArr: [
            new Bird(),
            new Pipe(200, 1080 - 500, 800, 150),
            new Pipe1(200, -500, 800, 150),
            new ScoreBox(200, 1080 - 500 - 280, 280, 150),
            new Pipe(800, 1080 - 500, 800, 150),
            new Pipe1(800, -500, 800, 150),
            new ScoreBox(800, 1080 - 500 - 280, 280, 150),
            new Pipe(1400, 1080 - 500, 800, 150),
            new Pipe1(1400, -500, 800, 150),
            new ScoreBox(1400, 1080 - 500 - 280, 280, 150)
          ],
          endGame: false
        });
      }

      // checking for collision
      let player = this.state.playerArr[0];

      // generate random number between 200-700
      const min = 200;
      const max = 500;
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
          hasPlayerCollided = false;

          if (this.state.playerArr[index].isHit !== true) {
            let scoreCopy = this.state.score;
            this.setState({
              score: scoreCopy + 1
            });
            Logger.setText("flappy.js", `score: ${this.state.score}`);
            player.getAudioManager().play(1); // testing!!!
          }
          this.state.playerArr[index].setIsHit(true);
        }

        // if a collision is detected, checkForCollision() returns true
        if (hasPlayerCollided === true) {
          // breaking for loop is player has collided and resetting game with new objects
          this.setState({ endGame: true });
          this.setState({ gameRunning: false });
          player.getAudioManager().play(2); // testing!!!
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

      // if player reaches screen top/bottom, restart
      if (player.getBody().getTop() > 990) {
        this.setState({ endGame: true });
        this.setState({ gameRunning: false });
      }
      if (player.getBody().getTop() < 0) {
        this.setState({ endGame: true });
        this.setState({ gameRunning: false });
      }

      // when game is not running
      // if space is pressed, run the game
      if (this.state.keyPressed === true && this.state.gameRunning === false) {
        this.setState({ gameRunning: true });
        this.setState({ keyPressed: false });
        this.setState({ score: 0 });
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
            <Menu showMenu={this.state.showMenu} />
            {Logger.getShow() ? <LoggerManager /> : ""}
          </div>
        </AppContext.Provider>
      </div>
    );
  }
}

export default Flappy;
