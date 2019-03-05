import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import "../../style/Frame.css";
import ResMan from "../../utils/ResourceManager";
import Sprites from "../../gameEngine/components/Sprite";

class WhiteBird {
  constructor(startPos, topPos, height, width) {
    this.len;
    this.entity = new Entity(
      "WhiteBird",
      new Body(this, 1280 + startPos, topPos, height, width),
      new Physics(this, -6, 0),
      new CollisionDetection(this),
      new Sprites(this, ResMan.getSpritePath("whiteBird.png"), 1, 3, 100, 100, 12),
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
    this.entity.body.left = 1280;
    this.entity.body.top = 640 - this.len - 280 - 800;
  };

  render() {
    let entityProps = this.getEntityProps();
    if (entityProps.bodyLeft < -100) {
      this.respawn();
    }

    return this.getSprite().render();
  }
}

export default WhiteBird;