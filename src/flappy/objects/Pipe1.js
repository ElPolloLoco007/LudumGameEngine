// import Entity from "../../gameEngine/Entity";
// import Body from "../../gameEngine/components/Body";
// import Physics from "../../gameEngine/components/Physics";
// import ResourceManager from "../../utils/ResourceManager";
// import CollisionDetection from "../../gameEngine/components/CollisionDetection";
// import React from "react";
// import "../../style/Frame.css";
// import { AppConsumer } from "../context";

// class Pipe extends React.Component {
//   constructor(props) {
//     super(props);
//     this.len;
//     this.entity = new Entity(
//       "Pipe set 1",
//       new Body(this, 1920 + 200, 0 - 500, 803, 150),
//       new Physics(this, -12.85, 0),
//       new CollisionDetection(this),
//       null
//     );
//   }

//   // entity method
//   getCollisionDetection() {
//     return this.entity.getCollisionDetection();
//   }
//   // entity method
//   getEntity() {
//     return this.entity;
//   }
//   // entity method
//   getBody() {
//     return this.entity.getBody();
//   }
//   // entity method
//   getPhysics() {
//     return this.entity.getPhysics();
//   }
//   // entity method
//   update() {
//     this.entity.update();
//   }
//   // entity method
//   getEntityProps() {
//     return this.entity.getEntityProps();
//   }

//   componentDidUpdate() {
//     this.entity.update();

//     //    this.entity.body.left -= 10; //updating value
//   }

//   respawn() {
//     //<AppConsumer>{console.log("fffff: ", this.context)}</AppConsumer>;
//     // const min = 200;
//     // const max = 500;
//     // const len = min + Math.random() * max;
//     this.entity.body.left = 1920; //updating value
//     //this.entity.body.top = 1080 - this.len;
//     // entity.body.height = 1080 - (1080 - len);
//   }
//   render() {
//     let entityProps = this.getEntityProps();
//     //<AppConsumer>{(this.len = this.context)}</AppConsumer>;
//     if (entityProps.bodyLeft < -150) {
//       this.respawn();
//       // this.entity.body.top = 0 - this.len.gap;

//       //let delta = this.props.delta; // this.state.arr[0][0]
//     }

//     let divStyleTop = {
//       transform: "scaleY(-1)",
//       position: "absolute",
//       overflow: "hidden",
//       height: entityProps.bodyHeight,
//       width: entityProps.bodyWidth,
//       left: entityProps.bodyLeft,
//       top: entityProps.bodyTop
//     };

//     const imgStyle = {
//       overflow: "hidden",
//       height: "100%",
//       width: "100%",
//       objectFit: "fill"
//     };

//     return (
//       <div className="frame">
//         <div style={divStyleTop}>
//           <img
//             src={ResourceManager.getImagePath("pipe.png")}
//             style={imgStyle}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// Pipe.contextType = AppConsumer;

// export default Pipe;

///////////////////////////////////////////////////////////////

import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import React from "react";
import "../../style/Frame.css";
import ResMan from "../../utils/ResourceManager";
//import { AppConsumer } from "../context";

//import { AppContext } from "../../flappy/context";

class Pipe {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.type = "crash";
    this.entity = new Entity(
      "Top pipe",
      new Body(this, 1920 + startPos, topPos, height, width),
      new Physics(this, -8.85, 0),
      new CollisionDetection(this),
      null
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
    this.entity.body.left = 1920;
    this.entity.body.top = 1080 - this.len - 280 - 800;
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < -150) {
      this.respawn();
    }

    let divStyleTop = {
      transform: "scaleY(-1)",
      position: "absolute",
      overflow: "hidden",
      height: entityProps.bodyHeight,
      width: entityProps.bodyWidth,
      left: entityProps.bodyLeft,
      top: entityProps.bodyTop
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
      </span>
    );
  }
}

export default Pipe;
