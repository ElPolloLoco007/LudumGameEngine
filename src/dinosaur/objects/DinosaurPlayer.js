import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
//import { isNullOrUndefined } from "util";
import ResMan from "../../utils/ResourceManager";
import AudioManager from "../../gameEngine/components/AudioManager";
import Sprites from "../../gameEngine/components/Sprite";

class DinosaurPlayer {
  constructor() {
    this.entity = new Entity(
      "DinosaurPlayer",
      new Body(this, 200, 460, 100, 100),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      new AudioManager([
        ResMan.getAudioPath("soundEffect1.mp3"),
        ResMan.getAudioPath("soundEffect2.mp3"),
        ResMan.getAudioPath("soundEffect3.mp3")
      ]),
      new Sprites(this, ResMan.getSpritePath("dinosaurs.png"), 3, 4, 100, 100, 12)
    );
    this.counterDinosaurJump = 0;
    this.enum = {
      BIRD_JUMPS: 0,
      BIRD_SCORE: 1,
      BIRD_DIES: 2
    };
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
  getAudioManager() {
    return this.entity.getAudioManager();
  }

  // entity method
  getSprite() {
    return this.entity.getSprite();
  }

  // entity method
  update() {

    // if collision flag is set true
    if (this.getCollisionDetection().getFlag() === true) {
      console.log("Collsion flagged!");
      if (this.getCollisionDetection().getType() === "Score box") {
        this.getAudioManager().play(this.enum.BIRD_SCORE);
      } else {
        this.getAudioManager().play(this.enum.BIRD_DIES);
      }
    }

    // updating this.entity
    this.entity.update();
  }

  // entity method
  getEntityProps() {
    return this.entity.getEntityProps();
  }

  // rendering this class
  render() {
    return (
      this.getSprite().render()
    );
  }
}

export default DinosaurPlayer;