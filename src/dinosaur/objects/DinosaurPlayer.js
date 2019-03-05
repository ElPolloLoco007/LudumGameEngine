import Entity from "../../gameEngine/Entity";
import Body from "../../gameEngine/components/Body";
import Physics from "../../gameEngine/components/Physics";
import CollisionDetection from "../../gameEngine/components/CollisionDetection";
import { isNullOrUndefined } from "util";
import ResMan from "../../utils/ResourceManager";
import AudioManager from "../../gameEngine/components/AudioManager";
import Sprites from "../../gameEngine/components/Sprite";

class DinosaurPlayer {
  constructor() {
    this.entity = new Entity(
      "DinosaurPlayer",
      new Body(this, 250, 460, 75, 75),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      new AudioManager([
        ResMan.getAudioPath("soundEffect1.mp3"),
        ResMan.getAudioPath("soundEffect2.mp3"),
        ResMan.getAudioPath("soundEffect3.mp3")
      ]),
      new Sprites(
        this,
        ResMan.getSpritePath("dinosaursRunning.png"),
        1,
        4,
        100,
        100,
        12
      )
    );
    this.counterDinosaurJump = 0;
    this.enum = {
      DINOSAUR_JUMPS: 0,
      DINOSAUR_SCORE: 1,
      DINOSAUR_DIES: 2
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
  update(value) {
    // if collision flag is set true
    if (this.getCollisionDetection().getFlag() === true) {
      console.log("Collsion flagged!");
      if (this.getCollisionDetection().getType() === "Score box") {
        this.getAudioManager().play(this.enum.DINOSAUR_SCORE);
      } else {
        this.getAudioManager().play(this.enum.DINOSAUR_DIES);
      }
    }

    //if value is something else than null or undefined, it will be put into a switch
    if (!isNullOrUndefined(value)) {
      switch (value) {
        case "w":
        case "ArrowUp":
        case " ":
          this.counterDinosaurJump += 10;
          this.getAudioManager().play(this.enum.DINOSAUR_JUMPS);
          break;
        default:
          console.log(value + " Invalid input!");
          break;
      }
    }

    if (this.counterDinosaurJump > 0) {
      --this.counterDinosaurJump;
      this.getPhysics().setTop(-12);
      console.log(this.getBody().getTop() + " top");
    } else {
      if (this.getBody().getTop() < 150) {
        this.getPhysics().setTop(6);
      }
      if (this.getBody().getTop() > 460) {
        this.getPhysics().setTop(0);
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
    )
  }
}

export default DinosaurPlayer;
