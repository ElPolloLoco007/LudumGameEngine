import React from "react";
import "../../style/menu.css";
import Score from "./Score";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [{ text: "Start Game" }, { text: "Score" }],
      showMenu: true,
      showScore: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e === "Start Game")
      this.setState({
        showMenu: false
      });
    if (e === "Score")
      this.setState({
        showScore: !this.state.showScore
      });
  }
  render() {
    const menuItems = this.state.menuItems.map((item, index) => (
      <MenuItem key={index} item={item} handleClick={this.handleClick} />
    ));

    let scoreBoard = (
      <div className="wrapper">
        <Score />
      </div>
    );
    let gameMenu = <div className="wrapper"> {menuItems}</div>;

    return (
      <div className={`menu ${this.props.position}`}>
        {this.state.showMenu ? gameMenu : this.props.showMenu}
        {this.state.showScore ? scoreBoard : this.props.showScore}
      </div>
    );
  }
}

function MenuItem(props) {
  return (
    <button
      className="menu-item"
      id={props.item.text}
      onClick={() => props.handleClick(props.item.text)}
    >
      {props.item.text.toUpperCase()}
    </button>
  );
}

export default Menu;
