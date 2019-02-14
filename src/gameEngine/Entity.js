import React from "react";
import Body from "./components/Body";

class Entity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: <Body x={10} y={4} heigth={700} width={1000} />
    };
    console.log(this.state.body);
  }

  render() {
    return this.state.body;
  }
}

export default Entity;
