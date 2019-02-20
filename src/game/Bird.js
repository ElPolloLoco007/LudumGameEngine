import Entity from "../gameEngine/Entity";
import Body from "../gameEngine/components/Body";
import Physics from "../gameEngine/components/Physics";
import CollisionDetection from '../gameEngine/components/CollisionDetection'
import React from "react";

class Bird extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      'Bird',
      new Body(this, 400, 400, 70, 70),
      new Physics(this, 2, 2),
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
    if (this.state.entity.getBody().getTop() == 900) 
    {
      this.state.entity.getBody().setTop(400);
      this.state.entity.getBody().setLeft(400);
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
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      top: entityProps.bodyTop,
      left: entityProps.bodyLeft,
      background: 'black',
      position: "absolute"
    };

    return (
      <div style={divStyle}>
      </div>
    ) 
  }
}

export default Bird;
