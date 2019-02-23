import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import BirdSprites from "../resources/sprites/birds.png";
import { isNullOrUndefined } from "util";
// import mp3 from "../resources/audio/SoundEffect1.mp3";
import mp3Three from "../resources/audio/SoundEffect3.mp3";
import ResMan from "../../utils/ResourceManager";

class Bird {
  constructor() {
    this.entity = new Entity(
      "Bird",
      new Body(this, 300, 540, 100, 200),
      new Physics(this, 0, 5),
      new CollisionDetection(this)
    );
    this.counterBirdJump = 0;
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
  update(value) {
    // if the bird touches the bottom of the screen, it will be restored to the starting position
    if (this.entity.getBody().getTop() > 1040) {
      this.entity.getBody().setTop(400);
      this.entity.getBody().setLeft(300);
    }

    // if collision flag is set true
    if (this.entity.getCollisionDetection().getFlag() === true) {
      console.log("Collsion flagged!");
      new Audio(mp3Three).play(); // only for testing
    }

    //if value is something else than null or undefined, it will be put into a switch
    if (!isNullOrUndefined(value)) {
      switch (value) {
        case "w":
        case "ArrowUp":
        case " ":
          this.counterBirdJump += 10;
          new Audio(new ResMan().getAudioPath("soundEffect1.mp3")).play(); // only for testing
          break;
        default:
          console.log(value + " Invalid input!");
          break;
      }
    }

    // bird jump and gravity
    if (this.counterBirdJump > 0) {
      this.entity.getPhysics().setTop(0);
      --this.counterBirdJump;
      this.entity.getBody().setTop(this.getEntityProps().bodyTop - 12);
    } else {
      const gravityAcceleration = 0.5;
      const prevTop = this.entity.getPhysics().getTop();
      if (prevTop < 20) {
        if (prevTop === 0) {
          this.entity.getPhysics().setTop(1);
        } else {
          this.entity.getPhysics().setTop(prevTop + gravityAcceleration);
        }
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
      top: 0,
      left: 0,
      position: "absolute"
    };

    return (
      <div style={divStyle}>
        <img src={BirdSprites} style={imgStyle} />
      </div>
    );
  }
}

export default Bird;
