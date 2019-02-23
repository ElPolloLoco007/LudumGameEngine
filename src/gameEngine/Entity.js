class Entity {
  constructor(name, body, physics, collisionDetection, audioManager) {
    // name of entity
    this.name = name;
    console.log(this.name);

    // Body component
    if (body !== null) {
      this.body = body;
      console.log("Successfully set body!");
    } else {
      console.log("Body component omitted!")
    }

    // Physics component
    if (physics !== null) {
      this.physics = physics;
      console.log("Successfully set physics!");
    } else {
      console.log("Physics component omitted!")
    }

    // CollisionDetection component
    if (collisionDetection !== null) {
      this.collisionDetection = collisionDetection;
      console.log("Successfully set collisionDetection!");
    } else {
      console.log("CollisionDetection component omitted!")
    }

    // AudioManager component
    if (audioManager !== null) {
      this.audioManager = audioManager;
      console.log("Successfully set audioManager");
    } else {
      console.log("AudioManager component omitted!")
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

  getAudioManager() {
    return this.audioManager;
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
