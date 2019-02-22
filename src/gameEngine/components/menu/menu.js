import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        { text: "Press any button to start game" },
        { text: "Score" }
      ],
      showMenu: null
    };
  }
 

  render() {
    return (
      <div className={"wrapper"}>
        <button className={"menu-item"}>WHAT</button>
        <button className={"menu-item"}>THE</button>
        <button className={"menu-item"}>Fuck</button>
      </div>
    );
  }
}

export default Menu;
