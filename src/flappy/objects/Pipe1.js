import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import "../../style/Frame.css";
import ImageRender from "../../gameEngine/components/ImageRender";
import ResourceManager from "../../utils/ResourceManager";

class Pipe {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.type = "crash";
    this.entity = new Entity(
      "Top pipe",
      new Body(this, 1920 + startPos, topPos, height, width),
      new Physics(this, -8.85, 0),
      new CollisionDetection(this),
      null,
      null,
      new ImageRender(this, ResourceManager.getImagePath("pipeReverse.png"))
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

  getImage() {
    return this.entity.getImage();
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

    return this.getImage().render();
  }
}

export default Pipe;
