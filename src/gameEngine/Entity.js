class Entity {
  constructor(name, body, physics, collisionDetection) {
    // name of entity
    this.name = name;

    if (body !== null) {
      this.body = body;
      console.log("Successfully set body!");
    }
    if (physics !== null) {
      this.physics = physics;
      console.log("Successfully set physics!");
    }
    if (collisionDetection !== null) {
      this.collisionDetection = collisionDetection;
      console.log("Successfully set collisionDetection!");
    }
  }

  getEntity() {
    return this;
  }

  getName() {
    return this.name;
  }

  getBody() {
    return this.body;
  }

  getPhysics() {
    return this.physics;
  }

  getCollisionDetection() {
    return this.collisionDetection;
  }

  update() {
    this.physics.update();
  }

  getEntityProps() {
    const props = {
      // entity name
      name: this.name,

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
