
class CollisionDetection {
  constructor(entity) {
    this.entity = entity;
    this.flag = false;
  }

  // getter
  getFlag() {
    return this.flag;
  }

  // checking if two entites have collided
  checkForCollision(otherEntity) {
    let player = this.entity.getEntityProps();
    let object = otherEntity.getEntityProps();
    let rect1 = { x: player.bodyLeft, y: player.bodyTop, width: player.bodyWidth, height: player.bodyHeight }
    let rect2 = { x: object.bodyLeft, y: object.bodyTop, width: object.bodyWidth, height: object.bodyHeight }

    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y) {
      this.flag = true;
      return this.flag;
    } else {
      this.flag = false;
      return this.flag;
    }
  }
}

export default CollisionDetection