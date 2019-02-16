import Entity from "../gameEngine/Entity";
import Body from "../gameEngine/components/Body";
import Physics from "../gameEngine/components/Physics";
import React from "react";

class Player2 extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      new Body(this, 1000, 1000, 100, 100),
      new Physics(this, -0.1, -0.1)
    );
    let entityProps = entity.getEntityProps();
    this.state = {
      entity: entity,
      entityProps: entityProps
    };

    console.log("x: " + entity.getBody().getX());
  }

  // override
  getBody() {
    return this.state.entity.getBody();
  }

  // override
  getPhysics() {
    return this.state.entity.getPhysics();
  }

  // override
  update() {
    console.log("hello from update!");
    this.state.entity.update();
  }

  // override
  getEntityProps() {
    return this.state.entity.getEntityProps();
  }

  render() {
    let entityProps = this.getEntityProps();

    let divStyle = {
      height: entityProps.height,
      width: entityProps.width,
      top: entityProps.top,
      left: entityProps.left,
      background: "blue",
      position: "absolute"
    };

    return <div style={divStyle} />;
  }
}

export default Player2;
