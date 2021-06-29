const { Circle, Line, shapeStats } = require('./shapes');

const shapes = [
    new Circle('circleA', 2),
    new Circle('circleB', 5),
    new Circle('circleC', 4),
    new Line('line1', { x: 10, y: 5 }, { x: 40, y: 15 })
];

shapeStats(shapes)