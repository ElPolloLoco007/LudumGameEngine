class Entity {
  constructor(body, physics) {
    if (body !== null) {
      this.body = body;
      console.log("Successfully set body!");
    }
    if (physics !== null) {
      this.physics = physics;
      console.log("Successfully set physics!");
    }
  }

  getBody() {
    return this.body;
  }

  getPhysics() {
    return this.physics;
  }

  update() {
    console.log("Calling update method in Entity class!");
    this.physics.update();

    console.log("left: " + this.body.getX());
  }

  getEntityProps() {
    const props = {
      height: this.body.getHeight(),
      width: this.body.getWidth(),
      top: this.body.getY(),
      left: this.body.getX()
    };
    return props;
  }
}

export default Entity;
