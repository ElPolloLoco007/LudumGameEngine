import Entity from "../gameEngine/Entity";
import Body from "../gameEngine/components/Body";
import Physics from "../gameEngine/components/Physics";
import PipeImg from "../resource/image/pipe.png";
import CollisionDetection from "../gameEngine/components/CollisionDetection";
import React from "react";

class Pipe extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      "Pipe",
      new Body(this, 1920, 1080 - 370, 370, 150),
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
    console.log(`entityProps: ${entityProps.bodyHeight}`);
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

    const imgStyle = {
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <div style={divStyle}>
        <img src={PipeImg} style={imgStyle} />
      </div>
    );
  }
}

export default Pipe;
