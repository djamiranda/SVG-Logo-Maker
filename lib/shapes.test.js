// import class from shapes
const { Triangle, Square, Circle } = require("./shapes.js");
// test for blue triangle
describe("Blue Triangle", () => {test("Testing a Blue Triangle", () => {const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});
// test for red square
describe("Red Square", () => {test("Testing a Red Square", () => {const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="red" />');
  });
});
// test for black circle with hex #
describe("Black Circle", () => {test("Testing a Circle shape with hex #000000, black", () => {const shape = new Circle();
    shape.setColor("#000000");
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#000000" />');
  });
});