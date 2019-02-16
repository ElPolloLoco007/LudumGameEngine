class Body {
  constructor(entity, x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.entity = entity;
  }

  // setters
  setEntity(entity) {
    this.entity = entity;
  }
  setX(value) {
    this.x = value;
  }
  setY(value) {
    this.y = value;
  }

  // getters
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }
}

export default Body;
