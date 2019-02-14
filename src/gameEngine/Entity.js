import React from 'react'
import Body from "./components/Body";

class Entity extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: <Body />
    }

  }

  getBody = () => {
    return this.state.body
  }


}

export default Entity;
