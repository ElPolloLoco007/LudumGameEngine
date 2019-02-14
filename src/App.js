import React from "react";
import PropTypes from "prop-types";
import Entity from "./gameEngine/Entity";

const App = props => {
  return (
    <div>
      <button onClick={props.onClick}>Hello there World!</button>;
      <Entity />
    </div>
  );
};

App.propTypes = {
  onClick: PropTypes.func
};

export default App;
