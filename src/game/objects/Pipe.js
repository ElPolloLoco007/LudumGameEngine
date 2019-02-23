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
      new Body(this, 300, 1080 - 500, 800, 150),
      new Physics(this, -12.85, 0),
      new CollisionDetection(this)
    );

    this.entity = [this.entity1, this.entity2];
  }

  // entity method
  getCollisionDetection() {
    return this.entity.map(index => {
      return index.getCollisionDetection();
    });
    // return this.entity.getCollisionDetection();
  }

  // entity method
  getEntity() {
    // return this.entity.map(index => {
    //   return index;
    // });
    return this.entity1;
  }

  // entity method
  getBody() {
    return this.entity.map(index => {
      return index.getBody();
    });
    // return this.entity.getBody();
  }

  // entity method
  getPhysics() {
    return this.entity.map(index => {
      return index.getPhysics();
    });
    // return this.entity.getPhysics();
  }

  // entity method
  update() {
    this.entity1.update();
    this.entity2.update();
  }

  // entity method
  getEntityProps() {
    return this.entity[0].getEntityProps();
  }

  // getEntityProps2() {
  //   // return this.entity2.getEntityProps();
  // }

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
    // let entityProps2 = this.getEntityProps2();
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

    // let divStyleTop = {
    //   transform: "scaleY(-1)",
    //   position: "absolute",
    //   overflow: "hidden",
    //   height: entityProps2.bodyHeight,
    //   width: entityProps2.bodyWidth,
    //   left: entityProps2.bodyLeft,
    //   top: entityProps2.bodyTop - 280 - 800
    // };

    const imgStyle = {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      objectFit: "fill"
    };

    return (
      <span className="frame">
        {/* <div style={divStyleTop}>
          <img src={PipeImg} style={imgStyle} />
        </div> */}
        <div style={divStyle}>
          <img src={PipeImg} style={imgStyle} />
        </div>
      </span>
    );
  }
}

export default Pipe;
