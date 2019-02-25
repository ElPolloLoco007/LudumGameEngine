class Sprites {
  constructor(entity, spriteImg) {
    this.entity = entity;
    this.spriteImg = spriteImg;
  }

  setSprite(value) {
    this.spriteImg = value;
  }

  getSprite() {
    return this.spriteImg;
  }
}

export default Sprites;