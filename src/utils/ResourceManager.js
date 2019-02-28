import React from "react";
import bla from "../../resources/images";

// function ResourceManager(props) {
//   return props.type + "/" + props.name;
// }

// export default ResourceManager;
class ResourceManager {
  // // ===< Elements >===============================================================
  // createHudElement = (text, pos) => {
  //   return <Hud score={text} position={pos} />;
  // };

  static getImageElement = name => {
    return (
      <img
        src={require(`../../resources/images/${name}`)}
        alt={`pic: ${name}`}
      />
    );
  };

  // getSpriteElement = name => {
  //   return <img src={require(`sprites/${name}`)} alt={`sprite: ${name}`} />;
  // };

  static getAudioElement = name => {
    // let out = new Audio("../../../flappy/resources/audio/" + name);
    // return out;
    return <audio src={require(`../../resources/audio/${name}`)} />;
  };

  // ===< Path >=================================================================
  static getImagePath = name => {
    return require(`../../resources/images/${name}`);
  };

  static getAudioPath = name => {
    return require(`../../resources/audio/${name}`);
  };

  static getSpritePath = name => {
    return require(`../../resources/sprites/${name}`);
  };

  // getSpritePath = name => {
  //   return `sprite/${name}`;
  // };

  // getFontPath = name => {
  //   return `fonts/${name}`;
  // };
}

export default ResourceManager;
