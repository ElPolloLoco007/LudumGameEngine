import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import PipeImg from "../resources/images/pipe.png";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";

class Pipe {
  constructor() {
    this.entity1 = new Entity(
      "Pipe set 1",
      new Body(this, 1920 + 200, 1080 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this),
      null
    );

    this.entity2 = new Entity(
      "Pipe set 2",
      new Body(this, 1920, 0 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this),
      null
    );

    this.entity = [this.entity1, this.entity2];
  }

  // entity method
  getCollisionDetection() {
    // for (let i = 0; i < this.entity.length; i++) {
    //   if (this.entity[i].getCollisionDetection()) {
    //     return true;
    //   }
    // }
    let f;
    for (let i = 0; i < this.entity.length; i++) {
      f = this.entity[i].getCollisionDetection();
      return f.splice();
    }

    // return this.entity.map(item => {
    //   return item.getCollisionDetection();
    // });
    // return this.entity1.getCollisionDetection();
  }

  // entity method
  getEntity() {
    // let f = [];
    // for (let i = 0; i < this.entity.length; i++) {
    //   console.log("f.");
    //   console.log(this.entity[i]);
    //   f[i] = this.entity[i];
    //   console.log("f.text");
    //   console.log(f);
    // }
    // return f.splice();

    return this.entity.map(stuff => {
      return stuff;
    });
    // console.log("f.text");
    // console.log(f.body);
    // return f.map(stuff => {
    //   return stuff;
    // });
    //return this.entity1;
  }

  // entity method
  getBody() {
    for (let i = 0; i < this.entity.length; i++) {
      return this.entity[i].getBody();
    }
    // return this.entity.map(item => {
    //   return item.body.getBody();
    // });
    //return this.entity[1].getBody();
    // return this.entity1.getBody();
  }

  // entity method
  getPhysics() {
    let f;
    for (let i = 0; i < this.entity.length; i++) {
      f = this.entity[i].getPhysics();
    }
    return f.splice();
    // return this.entity1.getPhysics();
  }

  // entity method
  update() {
    this.entity1.update();
    this.entity2.update();
  }

  // entity method
  getEntityProps() {
    return this.entity1.getEntityProps();
  }

  getEntityProps2() {
    return this.entity2.getEntityProps();
  }

  respawn = () => {
    // let entity = Object.assign({}, this.entity); //creating copy of object
    const min = 200;
    const max = 500;
    const len = min + Math.random() * max;
    this.entity1.body.left = 1920; //updating value
    this.entity1.body.top = 1080 - len;

    this.entity2.body.left = 1920; //updating value
    this.entity2.body.top = 1080 - len - 280 - 800;
    // entity.body.height = 1080 - (1080 - len);
  };

  render() {
    let entityProps = this.getEntityProps();
    let entityProps2 = this.getEntityProps2();
    console.log(entityProps2);
    console.log(this.entity2.body);
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
      height: entityProps2.bodyHeight,
      width: entityProps2.bodyWidth,
      left: entityProps2.bodyLeft,
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
