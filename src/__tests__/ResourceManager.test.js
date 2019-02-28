import ResourceManager from "../utils/ResourceManager";
import React from "react";
describe("Resource manager", () => {
  it("later", () => {
    const imagePath = "../flappy/resources/images/background.png";
    console.log("res man riggar: ", ResourceManager.getImagePath("logo.png"));
    const res = <img src={ResourceManager.getImagePath("background.png")} />;
    const exp = <img src={imagePath} />;

    expect(res).toBe(exp);
  });
});
