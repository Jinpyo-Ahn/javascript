function Circle(radius) {
    this.radius = radius;
}

Cricle.prototype.getDiameter = function () {
    return 2 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter());