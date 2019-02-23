import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import PipeImg from "../resources/images/pipe.png";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";

class Pipe {
  constructor() {
    this.entity = new Entity(
      "Pipe set 1",
      new Body(this, 1920 + 200, 1080 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this)
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

  respawn = () => {
    let entity = Object.assign({}, this.entity); //creating copy of object
    const min = 200;
    const max = 500;
    const len = min + Math.random() * max;
    entity.body.left = 1920; //updating value
    entity.body.top = 1080 - len;
    // entity.body.height = 1080 - (1080 - len);
    this.setState({
      entity
    });
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < -150) {
      this.respawn();
    }
    //let delta = this.props.delta; // this.state.arr[0][0]

    let divStyle = {
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop
    };

    let divStyleTop = {
      transform: "scaleY(-1)",
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop - 280 - 800
    };

    const imgStyle = {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <span className="frame">
        <div style={divStyleTop}>
          <img src={PipeImg} style={imgStyle} />
        </div>
        <div style={divStyle}>
          <img src={PipeImg} style={imgStyle} />
        </div>
      </span>
    );
  }
}

export default Pipe;
