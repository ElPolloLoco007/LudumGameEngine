import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    if (e === "WHAT")
      this.setState(state => ({
        showMenu: !state.showMenu
      }));
  };

  render() {
    const menu = (
      <div className={"wrapper"}>
        <button
          onClick={() => this.handleClick("WHAT")}
          className={"menu-item"}
        >
          WHAT
        </button>
        <button className={"menu-item"}>THE</button>
        <button className={"menu-item"}>Fuck</button>
      </div>
    );
    return <div>{this.state.showMenu ? menu : null} </div>;
  }
}

export default Menu;
