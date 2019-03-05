class Entity {
  constructor(
    name,
    body,
    physics,
    collisionDetection,
    audioManager,
    sprite,
    image
  ) {
    // name of entity
    this.name = name;
    console.log(this.name);

    // Body component
    if (body !== null) {
      this.body = body;
      //  console.log("Successfully set body!");
    } else {
      this.body = null;
      console.log("Body component omitted!");
    }

    // Physics component
    if (physics !== null) {
      this.physics = physics;
      // console.log("Successfully set physics!");
    } else {
      this.physics = null;
      console.log("Physics component omitted!");
    }

    // CollisionDetection component
    if (collisionDetection !== null) {
      this.collisionDetection = collisionDetection;
      // console.log("Successfully set collisionDetection!");
    } else {
      this.collisionDetection = null;
      console.log("CollisionDetection component omitted!");
    }

    // AudioManager component
    if (audioManager !== null) {
      this.audioManager = audioManager;
      //  console.log("Successfully set audioManager");
    } else {
      this.audioManager = null;
      console.log("AudioManager component omitted!");
    }

    // sprite component
    if (sprite !== null) {
      this.sprite = sprite;
      //  console.log("Successfully set sprite");
    } else {
      this.sprite = null;
      console.log("sprite component omitted!");
    }

    if (image !== null) {
      this.image = image;
      console.log("Successfully set image");
    } else {
      this.image = null;
      console.log("image component omitted!");
    }
  }
  // x
  getEntity() {
    return this;
  }
  // x
  getName() {
    return this.name;
  }
  // x
  getBody() {
    return this.body;
  }
  // c
  getPhysics() {
    return this.physics;
  }

  getCollisionDetection() {
    return this.collisionDetection;
  }
  // x
  getAudioManager() {
    return this.audioManager;
  }
  // x
  getSprite() {
    return this.sprite;
  }
  // x
  getImage() {
    return this.image;
  }
  // x
  update() {
    this.physics.update();
  }
  // x
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
