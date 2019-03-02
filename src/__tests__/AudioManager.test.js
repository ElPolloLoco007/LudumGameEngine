import AudioManager from "../gameEngine/components/AudioManager";
describe("Audio Manager", () => {
  let a;

  beforeAll(() => {
    a = { srcArr: ["123", "123", "123"] };
  });

  it("bla", () => {
    expect(a).toMatchObject(new AudioManager(["123", "123", "123"]));
  });
});
