import Entity from './Entity'

class Frame extends Entity {
  constructor(props) {
    super(props)

    this.state = {
      body: new Entity().getBody()

    }
    console.log(this.state.body);
  }


  render() {
    return this.state.body
  }
}
// <Body x={10} y={10} height={10} width={10} />
export default Frame