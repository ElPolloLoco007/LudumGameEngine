import Entity from "../gameEngine/Entity";
import Body from "../gameEngine/components/Body";
import React from "react";
import BackgroundImg from "../resource/image/background.png"
import Physics from "../gameEngine/components/Physics";

class Background extends React.Component {
  constructor(props) {
    super(props);

    let entity = new Entity(
      new Body(this, 0, 0, 1080, 1920),
      new Physics(this, 0.5, 0)
    );

    let entityProps = entity.getEntityProps();

    this.state = {
      entity: entity,
      entityProps: entityProps
    };
  }

  // override
  getBody() {

    if(this.state.entity.getBody().getX() == 1920)
    {
      this.state.entity.getBody().setX(0)
    }

    return this.state.entity.getBody();
  }

  // override
  getPhysics() {
    return this.state.entity.getPhysics();
  }

  // override
  update() {
    this.state.entity.update();
  }

  // override
  getEntityProps() {
    return this.state.entity.getEntityProps();
  }

  render() {
    let entityProps = this.getEntityProps();

    let outerDiv = {
      height: 1080,
      width: 1920,
      position: "absolute",
      overflow: 'hidden'
    };
    
    let divStyle = {
      height: entityProps.height,
      width: entityProps.width,
      top: entityProps.top,
      left: entityProps.left,
      position: "absolute"
    };
    
    let divStyle2 = {
      height: entityProps.height,
      width: entityProps.width,
      top: entityProps.top,
      left: entityProps.left - 1920,
      position: "absolute"
    };

    return (
    <div style={outerDiv}>
      <div style={divStyle}>
        <img src={BackgroundImg}/>
      </div>
      <div style={divStyle2}>
        <img src={BackgroundImg}/>
      </div>
    </div>
    );
  }
}

export default Background;