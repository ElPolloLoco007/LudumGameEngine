import React, { Component } from "react";
import "../style/App.css";
import Background from "../gameEngine/components/Background";
import DinosaurPlayer from "./objects/DinosaurPlayer";
import Tree1 from "./objects/Tree1";
import ResourceManager from "../utils/ResourceManager";


class Dinosaur extends Component {
  constructor(props) {
    super(props);

    let playerArr = [new DinosaurPlayer(), new Tree1()];

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


  // returning all the objects of the playerArr
  getObjects = () => {
    return this.state.playerArr.map(object => {
      return object.render();
    });
  };

  render() {
    let divStyle = {
      height: 1100,
      width: 1100,
      position: "absolute"
    };
    console.log("Updating App.js");

    return (
      <div style={divStyle} >
      <Background
              height={640}
              width={1280}
              speed={0.5}
              image={ResourceManager.getImagePath("backgroundDinosaur.png")}
            >
              {" "}
            </Background>{" "}
        {this.getObjects()}
      </div>
    );
  }
}

export default Dinosaur;
