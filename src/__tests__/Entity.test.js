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

var newEntity = new Entity(
  "entity test",
  new Body(this, 150, 150, 100, 100),
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
  const sprite = {
    entity: undefined,
    spriteSheet: "test-file-stub",
    rowsArr: [-0, -0, -0, -0, -75, -75, -75, -75],
    columnsArr: [-0, -100, -200, -300, -0, -100, -200, -300],
    spriteHeight: 75,
    spriteWidth: 100,
    spriteSheetHeight: 150,
    spriteSheetWidth: 400,
    speed: 12
  };

  const body = {
    entity: undefined,
    top: 50,
    left: 50,
    height: 100,
    width: 100
  };

  const audio = {
    srcArr: ["test-file-stub", "test-file-stub"]
  };

  it("Get Image should return null", () => {
    expect(entity.getImage()).toEqual(null);
  });

  it("getSprite() should match sprite", () => {
    expect(entity.getSprite()).toMatchObject(sprite);
  });

  it("getEntity to match entity", () => {
    expect(entity.getEntity()).toMatchObject(entity);
  });

  it("getAudioManager()", () => {
    expect(entity.getAudioManager()).toMatchObject(audio);
  });

  it("getAudioManager()", () => {
    expect(entity.getAudioManager()).toMatchObject(audio);
  });

  it("getName()", () => {
    expect(entity.getName()).toEqual("entity test");
  });

  it("getBody()", () => {
    expect(entity.getBody()).toMatchObject(body);
  });

  it("getEntityProps()", () => {
    entity.update();

    expect(entity.getEntityProps()).toMatchObject(newEntity);
  });
});
