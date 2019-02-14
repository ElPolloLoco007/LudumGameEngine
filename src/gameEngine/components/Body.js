import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 4,
      y: 4,
      height: 100,
      width: 100
    }
  }

  setX = x => {
    this.setState({ x: x });
  };

  setY = y => {
    this.setState({ y: y });
  };

  getX = () => {
    return this.state.x;
  };

  getY = () => {
    return this.state.y;
  };

  componentDidUpdate(prevProps) {
    if (prevProps.heigth !== this.props.heigth) {
      this.setState({ heigth: this.props.heigth });
    }
  }

  render() {
    let style = {
      height: this.state.height,
      width: this.state.width,
      left: this.state.x,
      top: this.state.y,
      background: "red"
    };
    return <div style={style}>bla</div>;
  }
}

export default Body;
