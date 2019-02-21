import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import PipeImg from "../resource/image/pipe.png";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";

class Pipe extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      "Pipe",
      new Body(this, 0, 192, 700, 150),
      new Physics(this, -0.5, 0),
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
    //let delta = this.props.delta; // this.state.arr[0][0]

    let divStyle = {
      position: "absolute",
      //overflow: "hidden",
      //height: entityProps.bodyHeight - delta,
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      //top: entityProps.bodyTop + delta
      top: entityProps.bodyTop
    };

    return (
      <div style={divStyle}>
        <img src={PipeImg} />
      </div>
    );
  }
}

export default Pipe;
