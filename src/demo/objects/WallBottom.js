import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";

class WallButtom {
  constructor(startPos, topPos, height, width) {
    this.entity = new Entity(
      "wall",
      new Body(this, 1920 + startPos, topPos, height, width),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      null,
      null,
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
  update() {
    this.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.entity.getEntityProps();
  }

  render() {
    let entityProps = this.getEntityProps();

    let divStyleTop = {
      backgroundColor: "#00b4",
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop
    };

    return (
      <span className="frame">
        <div style={divStyleTop} />
      </span>
    );
  }
}

export default WallButtom;
