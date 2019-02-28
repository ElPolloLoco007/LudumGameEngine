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
    this.bottomPipe = new Entity(
      "Bottom pipe",
      new Body(this, 1920 + 200, 1080 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this),
      null,
      null
    );

    this.topPipe = new Entity(
      "Top pipe",
      new Body(this, 1920 + 200, 1080 - 500 - 280 - 800, 800, 150),
      //new Body(this, 1920 + 200, 200 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this),
      null,
      null
    );

    this.score = new Entity(
      "Score",
      new Body(this, 1920 + 200 + 150, 1080 - 500 - 280, 280, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this),
      null,
      null
    );

    // this.entity = [this.bottomPipe, this.topPipe, this.score];
  }

  // entity method
  getCollisionDetection() {
    // return this.entity[0].getCollisionDetection();
    switch (this.switch) {
      case -1:
        return this.bottomPipe.getCollisionDetection();
      case 0:
        return this.topPipe.getCollisionDetection();
      // case 1:
      //   return this.score.getCollisionDetection();
      default:
        console.log("Error E2233");
    }
    //return this.bottomPipe.getCollisionDetection();
  }

  // entity method
  getEntity() {
    switch (this.switch) {
      case -1:
        this.switch += 1;
        return this.bottomPipe;
      //return this.entity[0];
      case 0:
        this.switch += 1;
        return this.score;
      // return this.entity[1];
      case 1:
        this.switch = -1;
        return this.topPipe;
      // return this.entity[2];
      default:
        console.log("Error E2233");
    }
    //this.switch = !this.switch;
    //return this.switch ? this.entity[0] : this.entity[1];
  }

  // entity method
  getBody() {
    //this.entity[1].body.left = this.entity[0].body.left;
    //this.entity[2].body.left = this.entity[0].body.left;
    //return this.entity[0].getBody();

    switch (this.switch) {
      case -1:
        return this.bottomPipe.getBody();
      case 0:
        return this.topPipe.getBody();
      case 1:
        return this.score.getBody();
      default:
        console.log("Error E2233");
    }

    //this.topPipe.body.left = this.bottomPipe.body.left;
    //this.score.body.left = this.bottomPipe.body.left + 150;
    //return this.bottomPipe.getBody();
  }

  // entity method
  getPhysics() {
    // return this.entity[0].getPhysics();
    switch (this.switch) {
      case -1:
        return this.bottomPipe.getPhysics();
      case 0:
        return this.topPipe.getPhysics();
      case 1:
        return this.score.getPhysics();
      default:
        console.log("Error E2233");
    }

    // return this.bottomPipe.getPhysics();
  }

  // entity method
  update() {
    // this.entity[0].update();
    // this.entity[1].update();
    //this.entity[2].update();
    this.bottomPipe.update();
    this.topPipe.update();
    this.score.update();
  }

  // entity method
  getEntityProps() {
    switch (this.switch) {
      case -1:
        return this.bottomPipe.getEntityProps();
      case 0:
        return this.topPipe.getEntityProps();
      case 1:
        return this.score.getEntityProps();
      default:
        console.log("Error E2233");
      //return this.bottomPipe.getEntityProps();
    }
  }
  getEntityProps1() {
    return this.bottomPipe.getEntityProps();
  }

  getEntityProps2() {
    return this.topPipe.getEntityProps();
  }

  getEntityProps3() {
    return this.score.getEntityProps();
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

    this.score.body.left = 1920 + 150; //updating value
    this.score.body.top = 1080 - len - 280;
  };

  render() {
    let entityProps1 = this.getEntityProps1();
    let entityProps2 = this.getEntityProps2();
    let entityProps3 = this.getEntityProps3();

    // s// console.log(this.entity2.body);
    if (entityProps1.bodyLeft < -150 || entityProps2.bodyLeft < -150) {
      this.respawn();
    }
    //let delta = this.props.delta; // this.state.arr[0][0]

    let divStyle = {
      position: "absolute",
      overflow: "hidden",
      height: entityProps1.bodyHeight,
      width: entityProps1.bodyWidth,
      left: entityProps1.bodyLeft,
      top: entityProps1.bodyTop
    };

    let divStyleTop = {
      transform: "scaleY(-1)",
      position: "absolute",
      overflow: "hidden",
      height: entityProps2.bodyHeight,
      width: entityProps2.bodyWidth,
      left: entityProps2.bodyLeft,
      top: entityProps2.bodyTop
    };

    let divScore = {
      backgroundColor: "red",
      position: "absolute",
      overflow: "hidden",
      height: entityProps3.bodyHeight,
      width: entityProps3.bodyWidth,
      left: entityProps3.bodyLeft,
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
