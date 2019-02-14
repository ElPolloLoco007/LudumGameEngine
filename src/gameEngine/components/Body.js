import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: props.y,
      heigth: props.heigth,
      width: props.width
    };
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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.heigth !== this.props.heigth) {
  //     this.setState({ heigth: this.props.heigth });
  //   }
  // }

  render() {
    let style = {
      heigth: this.state.heigth,
      width: this.state.width,
      background: "red"
    };
    return <div style={style}>bla</div>;
  }
}

export default Body;
