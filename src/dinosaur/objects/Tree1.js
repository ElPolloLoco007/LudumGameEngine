import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import ResMan from "../../utils/ResourceManager";

class Tree1 {
  constructor() {
    this.entity = new Entity(
      "Tree1",
      new Body(this, 400, 365, 200, 100),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      null,
      null
      );
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
  update() {
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
      height: 200,
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
          <img src={ResMan.getImagePath("tree.png")} style={imgStyle} />
        </div>
    );
  }
}

export default Tree1;
