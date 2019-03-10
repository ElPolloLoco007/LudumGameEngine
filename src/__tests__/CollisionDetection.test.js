import Body from "../gameEngine/components/Body";
import Entity from "../gameEngine/Entity";
import Physics from "../gameEngine/components/Physics";
import CollisionDetection from "../gameEngine/components/CollisionDetection";

class Player {
  constructor() {
    this.entity = new Entity(
      "Player",
      new Body(this, 0, 0, 100, 100),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      null,
      null
    );
  }
  getEntityProps() {
    return this.entity.getEntityProps();
  }
  getEntity() {
    return this.entity;
  }
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }
}
class Obstical {
  constructor(x, y, h, w) {
    this.entity = new Entity(
      "Obs",
      new Body(this, x, y, h, w),
      new Physics(this, 0, 0),
      new CollisionDetection(this),
      null,
      null
    );
  }
  getEntity() {
    return this.entity;
  }
  getEntityProps() {
    return this.entity.getEntityProps();
  }
  getCollisionDetection() {
    return this.entity.getCollisionDetection();
  }
}

let player;

describe("Collision Detection", () => {
  beforeAll(() => {
    player = new Player();
  });

  it("collision", () => {
    let bottomRightCorner = new Obstical(99, 99, 100, 100);
    let bottomLeftCorner = new Obstical(-99, 99, 100, 100);
    let topRightCorner = new Obstical(99, -99, 100, 100);
    let topLeftCorner = new Obstical(-99, -99, 100, 100);

    const res1 = player
      .getCollisionDetection()
      .checkForCollision(bottomRightCorner.getEntity());
    const res2 = player
      .getCollisionDetection()
      .checkForCollision(bottomLeftCorner.getEntity());
    const res3 = player
      .getCollisionDetection()
      .checkForCollision(topRightCorner.getEntity());
    const res4 = player
      .getCollisionDetection()
      .checkForCollision(topLeftCorner.getEntity());
    expect(res1).toBe(true);
    expect(res2).toBe(true);
    expect(res3).toBe(true);
    expect(res4).toBe(true);
    expect(player.getCollisionDetection().getFlag()).toBe(true);
    expect(player.getCollisionDetection().getType()).toBe("Obs");
  });

  it("no collision", () => {
    let obs = new Obstical(150, 150, 100, 100);

    const res = player
      .getCollisionDetection()
      .checkForCollision(obs.getEntity());
    expect(res).toBe(false);
    expect(player.getCollisionDetection().getFlag()).toBe(false);
  });
});
