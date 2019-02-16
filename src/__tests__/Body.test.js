import Body from "./../gameEngine/components/Body";
import Entity from "./../gameEngine/Entity";

let entity = new Entity(new Body(this, 0, 0, 100, 200));

describe("Body", () => {
  it("width should be 200", () => {
    expect(entity.body.width).toBe(200);
  });

  it("height should be 100", () => {
    expect(entity.body.height).toBe(100);
  });

  it("should have same states", () => {
    const res = {
      entity: undefined,
      x: 0,
      y: 0,
      height: 100,
      width: 200
    };
    expect(entity.body).toMatchObject(res);
  });
});
