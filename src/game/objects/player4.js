import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import React from "react";

class Player4 extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      'Player4',
      new Body(this, 0, 1000, 100, 100),
      new Physics(this, 0.1, -0.1)
    );
    let entityProps = entity.getEntityProps();
    this.state = {
      entity: entity,
      entityProps: entityProps
    };
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
      background: "orange",
      position: "absolute"
    };

    return <div style={divStyle} />;
  }
}

export default Player4;
