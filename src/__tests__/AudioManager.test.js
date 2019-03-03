import AudioManager from "../gameEngine/components/AudioManager";
import ResourceManager from "../utils/ResourceManager";
describe("Audio Manager", () => {
  let a;

  beforeAll(() => {
    a = { srcArr: ["123", "123", "123"] };
  });

  it("bla", () => {
    expect(a).toMatchObject(new AudioManager(["123", "123", "123"]));
  });

  it("sooner", () => {
    let bergur = new Audio(ResourceManager.getAudioPath("soundEffect2.mp3"));
    if (bergur.duration > 0) {
      console.log("pre 0");
    }
    bergur.play();
    if (bergur.duration > 0) {
      console.log("greater than 0");
    } else {
      console.log("hmmmmmm");
    }

    expect(
      new Audio(ResourceManager.getAudioPath("soundEffect2.mp3")).play()
    ).toBe(true);
  });

  it("later", () => {
    let aa = new AudioManager(ResourceManager.getAudioPath("soundEffect1.mp3"));
    aa.play();
    let bob = new Audio(ResourceManager.getAudioPath("soundEffect2.mp3"));
    console.log("bob", bob);
    expect(bob.play()).toBe(!aa.paused);
  });
});
