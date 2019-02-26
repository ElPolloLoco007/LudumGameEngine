import Body from "../gameEngine/components/Body";

describe("Body", () => {
  const body = new Body(this, 20, 10, 100, 200);
  it("width should be 200", () => {
    expect(body.width).toBe(200);
  });

  it("height should be 100", () => {
    expect(body.height).toBe(100);
  });

  it("top should be 10", () => {
    expect(body.top).toBe(10);
  });

  it("left should be 20", () => {
    expect(body.left).toBe(20);
  });
  it("should have same states", () => {
    const res = {
      entity: undefined,
      left: 20,
      top: 10,
      height: 100,
      width: 200
    };
    expect(body).toMatchObject(res);
  });
});
