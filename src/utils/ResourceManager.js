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

  getImageElement = name => {
    return (
      <img
        src={require(`../game/resources/images/${name}`)}
        alt={`pic: ${name}`}
      />
    );
  };

  // getSpriteElement = name => {
  //   return <img src={require(`sprites/${name}`)} alt={`sprite: ${name}`} />;
  // };

  getAudioElement = name => {
    // let out = new Audio("../../../game/resources/audio/" + name);
    // return out;
    return <audio src={require(`../game/resources/audio/${name}`)} />;
  };

  // ===< Path >=================================================================
  // getImagePath = name => {
  //   return (String)`image/${name}`;
  // };

  getAudioPath = name => {
    return require(`../game/resources/audio/${name}`);
  };

  // getSpritePath = name => {
  //   return `sprite/${name}`;
  // };

  // getFontPath = name => {
  //   return `fonts/${name}`;
  // };
}

export default ResourceManager;
