import Body from "../gameEngine/components/Body";
import Entity from "../gameEngine/Entity";
import Physics from "../gameEngine/components/Physics";
import AudioManager from "../gameEngine/components/AudioManager";
import Sprite from "../gameEngine/components/Sprite";
import ImageRender from "../gameEngine/components/ImageRender";
import CollisionDetection from "../gameEngine/components/CollisionDetection";
import ResourceManager from "../utils/ResourceManager";

var entity = new Entity(
  "entity test",
  new Body(this, 50, 50, 100, 100),
  new Physics(this, 100, 100),
  new CollisionDetection(this),
  new AudioManager([
    ResourceManager.getAudioPath("soundEffect1.mp3"),
    ResourceManager.getAudioPath("soundEffect2.mp3")
  ]),
  new Sprite(
    this,
    ResourceManager.getSpritePath("birds.png"),
    2,
    4,
    75,
    100,
    12
  ),
  null
);

describe("Entity", () => {
  it("Get Image should return null", () => {
    expect(entity.getImage()).toEqual(null);
  });

  const sprite = {
    entity: undefined,
    spriteSheet: "test-file-stub",
    rowsArr: [-0, -0, -0, -0, -75, -75, -75, -75],
    columns: 4,
    spriteHeight: 75,
    spriteWidth: 100,
    speed: 12
  };

  it("Get sprite should return ", () => {
    expect(entity.getSprite()).toMatchObject(sprite);
  });
});
