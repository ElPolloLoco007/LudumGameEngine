import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import BirdSprites from "../resources/sprites/birds.png";

class Bird extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      "Bird",
      new Body(this, 300, 540, 100, 200),
      new Physics(this, 0, 5),
      new CollisionDetection(this)
    );

    let row = 2;
    let rowHeight = 50;
    let rows = [];
    let column = 4;
    let columnsWidth = 50;
    let columns = [];

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        rows.push(-i * rowHeight);
      }
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        columns.push(-j * columnsWidth);
      }
    }

    let entityProps = entity.getEntityProps();
    this.state = {
      entity: entity,
      entityProps: entityProps,
      rows: rows.slice(),
      columns: columns.slice(),
      spriteHeight: rowHeight,
      spriteWidth: columnsWidth,
      counter: 0,
      spriteTop: 0,
      spriteLeft: 0,
      size: 4 * 2,
      score: 0,
      fps: 60,
      now: 0,
      then: Date.now(),
      interval: 0,
      delta: 0,
      counterChange: 0
    };
    //requestAnimationFrame(this.animatePlayer)
  }
  /*
  animatePlayer = () => {
    let fps = this.state.fps
    let now = this.state.now
    let then = this.state.then
    let interval = 1000 / this.state.fps
    let delta

    now = Date.now()
    delta = now - then
    this.setState({ fps: fps, now: now, then: then, interval: interval, delta: delta })

    if (delta > interval) {
      let counter = this.state.counter
      let spriteTop = this.state.spriteTop
      let spriteLeft = this.state.spriteLeft
      let size = (this.state.row * this.state.column) - 1
      let counterChange = this.state.counterChange

      ++counterChange

      then = now - (delta % interval)
      this.setState({ then: then })

      if (counterChange > 5) {
        this.setState({ counterChange: 0 })
        spriteTop = this.state.rows[counter]
        spriteLeft = this.state.columns[counter]

        if (counter >= size) {
          this.setState({ counter: 0 })

        }
        else {
          ++counter
          this.setState({ counter: counter })
        }
        this.setState({ spriteTop: spriteTop, spriteLeft: spriteLeft })
      }
      else {
        this.setState({ counterChange: counterChange })
      }
    }
    requestAnimationFrame(this.animatePlayer)
  }*/

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
    if (this.state.entity.getBody().getTop() == 1040) {
      this.state.entity.getBody().setTop(400);
      this.state.entity.getBody().setLeft(300);
    }

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
      width: this.state.spriteWidth,
      height: this.state.spriteHeight,
      top: entityProps.bodyTop,
      left: entityProps.bodyLeft,
      overflow: "hidden",
      position: "absolute",
      background: "red"
    };

    let imgStyle = {
      width: entityProps.bodyWidth,
      height: entityProps.bodyHeight,
      top: this.state.spriteTop,
      left: this.state.spriteLeft,
      position: "absolute"
    };

    return (
      <div style={divStyle}>
        <img src={BirdSprites} style={imgStyle} />
      </div>
    );
  }
}

export default Bird;
