class Shape {
    constructor(name) {
        this.name = name;
    };
};


class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    };

    calcArea() {
        return Math.PI * this.radius * this.radius;
    };
};


class Line extends Shape {
    constructor(name, pointA, pointB) {
        super(name)
        this.pointA = pointA;
        this.pointB = pointB;
    };

    calcLength() {
        return Math.sqrt(
            Math.pow((this.pointB.x - this.pointA.x), 2) +
            Math.pow((this.pointB.y - this.pointA.y), 2)
        )
    };
}


function shapeStats(shapes) {
    console.log('Shape state: ');

    shapes.forEach(shape => {
        if(shape.calcArea) {
            console.log(`${shape.name} hads area of ${Math.round(shape.calcArea())} cm2`);
        }
    });
};

module.exports = {
    Circle,
    Line,
    shapeStats,
}