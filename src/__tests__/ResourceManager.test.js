import { shallow, mount } from "../enzyme";

import ResourceManager from "../utils/ResourceManager";
import React from "react";

describe("Resource manager", () => {
  it("later", () => {
    const audioSrc = ResourceManager.getAudioPath("soundEffect1.mp3");
    const imgSrc = ResourceManager.getImagePath("background.png");

    const wrapper = shallow(<img src={imgSrc} />);
    expect(wrapper.find("img")).toBeDefined();
    expect(wrapper.find("img").prop("src")).toEqual(imgSrc);

    const audioWrapper = shallow(<audio src={audioSrc} />);
    expect(audioWrapper.find("audio")).toBeDefined();
    expect(audioWrapper.find("audio").prop("src")).toEqual(audioSrc);
  });
});
