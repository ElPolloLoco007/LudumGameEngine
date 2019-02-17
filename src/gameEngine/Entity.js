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

    console.log("left: " + this.body.getLeft());
  }

  getEntityProps() {
    const props = {
      // body props
      bodyHeight: this.body.getHeight(),
      bodyWidth: this.body.getWidth(),
      bodyTop: this.body.getTop(),
      bodyLeft: this.body.getLeft(),

      // physics props
      physicsLeft: this.physics.getLeft(),
      physicsTop: this.physics.getTop()
    };
    return props;
  }
}

export default Entity;
