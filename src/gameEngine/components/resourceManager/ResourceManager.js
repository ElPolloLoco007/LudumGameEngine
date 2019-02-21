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
        src={require(`../../../game/resources/images/${name}`)}
        alt={`pic: ${name}`}
      />
    );
  };

  // getSpriteElement = name => {
  //   return <img src={require(`sprites/${name}`)} alt={`sprite: ${name}`} />;
  // };

  // getAudioElement = (name, ref) => {
  //   return <audio ref={ref} src={require(`audio/${name}`)} />;
  // };

  // ===< Path >=================================================================
  // getImagePath = name => {
  //   return `image/${name}`;
  // };

  // getAudioPath = name => {
  //   return `audio/${name}`;
  // };

  // getSpritePath = name => {
  //   return `sprite/${name}`;
  // };

  // getFontPath = name => {
  //   return `fonts/${name}`;
  // };
}

export default ResourceManager;
