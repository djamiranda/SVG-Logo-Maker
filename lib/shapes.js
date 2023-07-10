// overall shape class constructor
class Shape {constructor() {this.color = "";} setColor(colorVar) {this.color = colorVar;}}

  // triangle shape & color fill
  class Triangle extends Shape {render() {return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;}}

  // square shape & color fill
  class Square extends Shape {render() {return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;}}

  // circle shape & color fill  
  class Circle extends Shape {render() {return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;}}
  
  module.exports = { Triangle, Square, Circle };