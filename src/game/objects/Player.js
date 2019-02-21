import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      "Player",
      new Body(this, 300, 0, 100, 100),
      new Physics(this, 0.0, 0.6),
      new CollisionDetection(this)
    );
    let entityProps = entity.getEntityProps();
    this.state = {
      entity: entity,
      entityProps: entityProps
    };
  }

  // entity method
  getCollisionDetection() {
    return this.state.entity.getCollisionDetection();
  }

  // entity method
  getEntity() {
    return this.state.entity;
  }

  // entity method
  getBody() {
    return this.state.entity.getBody();
  }

  // entity method
  getPhysics() {
    return this.state.entity.getPhysics();
  }

  // entity method
  update() {
    this.state.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.state.entity.getEntityProps();
  }

  render() {
    let entityProps = this.getEntityProps();

    let divStyle = {
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      top: entityProps.bodyTop,
      left: entityProps.bodyLeft,
      background: "green",
      position: "absolute"
    };

    return <div style={divStyle} />;
  }
}

export default Player;
