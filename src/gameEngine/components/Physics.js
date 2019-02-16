
class Physics {
    constructor(entity, x, y) {
        this.x = x;
        this.y = y;
        this.entity = entity;
    }

    setEntity(entity) {
        this.entity = entity;
    }

    update = () => {
        let prevX = this.entity.getBody().getX();
        let prevY = this.entity.getBody().getY();

        this.entity.getBody().setX(prevX + this.x);
        this.entity.getBody().setY(prevY + this.y);

        console.log(this.entity.getBody().getX())
        console.log(this.entity.getBody().getY())
    }
}

export default Physics