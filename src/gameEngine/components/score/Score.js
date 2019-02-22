import React, { Component } from "react";
import "./Score.css";

// Shows the top ten scoreboard
class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [props.score]
    };
  }

  // Function to remove the last item in the array
  removeLastItem() {
    this.setState(index => {
      const list = this.state.list.slice(index, -1);
      return {
        list
      };
    });
  }

  // Function to render a picture, to number one on the scoreboard
  renderPrize(index) {
    if (index === 0) {
      return <img src="http://goo.gl/u1KKqp" />;
    }
    return null;
  }

  render() {
    // Only allow 10 items in the list
    if (this.state.list.length > 10) {
      this.removeLastItem();
    }
    return (
      <table>
        <TableHeader />
        {this.state.list
          .sort((a, b) => b - a)
          .map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>
                  {item} {this.renderPrize(index)}
                </td>
              </tr>
            );
          })}
      </table>
    );
  }
}

// Function for the tableheader
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>No.</th>
        <th>Highscores</th>
      </tr>
    </thead>
  );
};

export default Score;
