import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";
import ResMan from "../../utils/ResourceManager";

class Pipe {
  constructor() {
    this.switch = true;
    this.bottomPipe = new Entity(
      "Bottom pipe",
      new Body(this, 1920 + 1200, 1080 - 500, 800, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this),
      null
    );

    this.topPipe = new Entity(
      "Top pipe",
      new Body(this, 1920 + 1200, 0 - 500, 800, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this),
      null
    );

    this.entity = [this.bottomPipe, this.topPipe];
  }

  // entity method
  getCollisionDetection() {
    return this.entity[1].getCollisionDetection();
  }

  // entity method
  getEntity() {
    this.switch = !this.switch;
    return this.switch ? this.entity[0] : this.entity[1];
  }

  // entity method
  getBody() {
    this.entity[1].body.left = this.entity[0].body.left;
    return this.entity[0].getBody();
  }

  // entity method
  getPhysics() {
    return this.entity[1].getPhysics();
  }

  // entity method
  update() {
    this.bottomPipe.update();
    this.topPipe.update();
  }

  // entity method
  getEntityProps() {
    return this.bottomPipe.getEntityProps();
  }

  getEntityProps2() {
    return this.topPipe.getEntityProps();
  }

  respawn = () => {
    // let entity = Object.assign({}, this.entity); //creating copy of object
    const min = 200;
    const max = 500;
    const len = min + Math.random() * max;
    this.bottomPipe.body.left = 1920; //updating value
    this.bottomPipe.body.top = 1080 - len;

    this.topPipe.body.left = 1920; //updating value
    this.topPipe.body.top = 1080 - len - 280 - 800;
  };

  render() {
    let entityProps = this.getEntityProps();
    let entityProps2 = this.getEntityProps2();
    if (entityProps.bodyLeft < -150 || entityProps2.bodyLeft < -150) {
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

    let divScore = {
      backgroundColor: "red",
      position: "absolute",
      overflow: "hidden",
      height: 280,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft + 150,
      top: entityProps.bodyTop - 280
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
          <img src={ResMan.getImagePath("pipe.png")} style={imgStyle} />
        </div>
        <div style={divScore} />
        <div style={divStyle}>
          <img src={ResMan.getImagePath("pipe.png")} style={imgStyle} />
        </div>
      </span>
    );
  }
}

export default Pipe;
