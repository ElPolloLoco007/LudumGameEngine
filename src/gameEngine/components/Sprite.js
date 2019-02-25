class Sprite {
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

export default Sprite;