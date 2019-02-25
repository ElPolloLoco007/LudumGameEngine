import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";
import ResMan from "../../utils/ResourceManager";

class Pipe {
  constructor() {
    this.switch = -1;
    this.entity1 = new Entity(
      "Pipe set 1",
      new Body(this, 1920 + 200, 1080 - 500, 800, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this),
      null
    );

    this.entity2 = new Entity(
      "Pipe set 2",
      new Body(this, 1920, 200 - 500, 800, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this),
      null
    );

    this.score = new Entity(
      "Score",
      new Body(this, 1920 + 350, 1080 - 500 - 280, 280, 150),
      new Physics(this, -2.85, 0),
      new CollisionDetection(this),
      null
    );

    this.entity = [this.entity1, this.entity2, this.score];
  }

  // entity method
  getCollisionDetection() {
    return this.entity[1].getCollisionDetection();
  }

  // entity method
  getEntity() {
    switch (this.switch) {
      case -1:
        this.switch += 1;
        return this.entity[0];
      case 0:
        this.switch += 1;
        return this.entity[1];
      case 1:
        this.switch = -1;
        return this.entity[2];
      default:
        console.log("Error E2233");
    }
    //this.switch = !this.switch;
    //return this.switch ? this.entity[0] : this.entity[1];
  }

  // entity method
  getBody() {
    this.entity[1].body.left = this.entity[0].body.left;
    this.entity[2].body.left = this.entity[0].body.left;
    return this.entity[0].getBody();
  }

  // entity method
  getPhysics() {
    return this.entity[1].getPhysics();
  }

  // entity method
  update() {
    this.entity[0].update();
    this.entity[1].update();
    this.entity[2].update();
  }

  // entity method
  getEntityProps() {
    return this.entity1.getEntityProps();
  }

  getEntityProps2() {
    return this.entity2.getEntityProps();
  }

  getEntityProps3() {
    return this.score.getEntityProps();
  }

  respawn = () => {
    // let entity = Object.assign({}, this.entity); //creating copy of object
    const min = 200;
    const max = 500;
    const len = min + Math.random() * max;
    this.entity1.body.left = 1920; //updating value
    this.entity1.body.top = 1080 - len;

    this.score.body.left = 1920 + 150; //updating value
    this.score.body.top = 1080 - len - 280;

    this.entity2.body.left = 1920; //updating value
    this.entity2.body.top = 1080 - len - 280 - 800;
  };

  render() {
    let entityProps = this.getEntityProps();
    let entityProps2 = this.getEntityProps2();
    let entityProps3 = this.getEntityProps3();

    // s// console.log(this.entity2.body);
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
      height: entityProps3.bodyHeight,
      width: entityProps3.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps3.bodyTop
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
        <div style={divStyle}>
          <img src={ResMan.getImagePath("pipe.png")} style={imgStyle} />
        </div>
        <div style={divScore} />
      </span>
    );
  }
}

export default Pipe;
