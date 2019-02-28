import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import { isNullOrUndefined } from "util";
import ResMan from "../../utils/ResourceManager";
import AudioManager from "../../gameEngine/components/AudioManager";
import Sprites from "../../gameEngine/components/Sprite";

class DinosaurPlayer {
  constructor() {
    this.entity = new Entity(
      "DinosaurPlayer",
      new Body(this, 200, 455, 390, 580),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      new AudioManager([
        ResMan.getAudioPath("soundEffect1.mp3"),
        ResMan.getAudioPath("soundEffect2.mp3"),
        ResMan.getAudioPath("soundEffect3.mp3")
      ]),
      new Sprites(this, ResMan.getSpritePath("dinosaurs.png"))
    );
    this.counterBirdJump = 0;
    this.enum = {
      BIRD_JUMPS: 0,
      BIRD_SCORE: 1,
      BIRD_DIES: 2
    };
  }

  // entity method
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }

  // entity method
  getEntity() {
    return this.entity;
  }

  // entity method
  getBody() {
    return this.entity.getBody();
  }

  // entity method
  getPhysics() {
    return this.entity.getPhysics();
  }

  // entity method
  getAudioManager() {
    return this.entity.getAudioManager();
  }

  // entity method
  getSprite() {
    return this.entity.getSprite();
  }

  // entity method
  update(value) {

    // if collision flag is set true
    if (this.getCollisionDetection().getFlag() === true) {
      console.log("Collsion flagged!");
      this.getAudioManager().play(this.enum.BIRD_DIES);
    }

    //if value is something else than null or undefined, it will be put into a switch
    if (!isNullOrUndefined(value)) {
      switch (value) {
        case "w":
        case "ArrowUp":
        case " ":
          this.counterBirdJump += 10;
          this.getAudioManager().play(this.enum.BIRD_JUMPS);
          break;
        default:
          console.log(value + " Invalid input!");
          break;
      }
    }

    // updating this.entity
    this.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.entity.getEntityProps();
  }

  // rendering this class
  render() {
    let entityProps = this.getEntityProps();

    let divStyle = {
      width: 100,
      height: 100,
      top: entityProps.bodyTop,
      left: entityProps.bodyLeft,
      overflow: "hidden",
      position: "absolute",
      background: "red"
    };

    let imgStyle = {
      width: entityProps.bodyWidth,
      height: entityProps.bodyHeight,
      top: -25,
      left: -15,
      position: "absolute"
    };

    return (
      <div style={divStyle}>
        <img src={this.getSprite().getSprite()} style={imgStyle} />
      </div>
    );
  }
}

export default DinosaurPlayer;