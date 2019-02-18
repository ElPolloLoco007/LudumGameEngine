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

      // updating every player
      this.state.playerArr.forEach(element => {
        element.update();
      });

      this.forceUpdate();
    }

    requestAnimationFrame(this.gameLoop);
  };

  handleClick = () => {
    this.state.player.update();
    this.forceUpdate();
    console.log("handleClick");
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

    console.log("Updating App.js");

    return (
      <div style={divStyle} onClick={this.handleClick}>
        {this.getObjects()}
      </div>
    );
  }
}

export default Game;
