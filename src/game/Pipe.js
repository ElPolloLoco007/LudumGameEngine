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
      new Body(this, 1920 + 170, 1080 - 600, 800, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this)
    );
    let entityProps = entity.getEntityProps();
    this.state = {
      gap: 400,
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

  respawn = () => {
    let entity = Object.assign({}, this.state.entity); //creating copy of object
    const len = 200 + Math.random() * 700;
    entity.body.left = 2000; //updating value
    entity.body.top = 1080 - len;
    // entity.body.height = len;
    this.setState({
      entity,
      gap: len
    });
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < 1700) {
      this.respawn();
    }
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

    let divStyleTop = {
      transform: "scaleY(-1)",
      position: "absolute",
      //overflow: "hidden",
      //height: entityProps.bodyHeight - delta,
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      //top: entityProps.bodyTop + delta
      top: -280
    };

    const imgStyle = {
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <span>
        <div style={divStyle}>
          <img src={PipeImg} style={imgStyle} />
        </div>
        <div style={divStyleTop}>
          <img src={PipeImg} style={imgStyle} />
        </div>
      </span>
    );
  }
}

export default Pipe;
