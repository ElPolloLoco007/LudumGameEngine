import React from "react";

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
      <img src={require(`../resources/images/${name}`)} alt={`pic: ${name}`} />
    );
  };

  // getSpriteElement = name => {
  //   return <img src={require(`sprites/${name}`)} alt={`sprite: ${name}`} />;
  // };

  static getAudioElement = name => {
    return <audio src={require(`../resources/audio/${name}`)} />;
  };

  // ===< Path >=================================================================
  static getImagePath = name => {
    return require(`../resources/images/${name}`);
  };

  static getAudioPath = name => {
    return require(`../resources/audio/${name}`);
  };

  static getSpritePath = name => {
    return require(`../resources/sprites/${name}`);
  };
}

export default ResourceManager;
