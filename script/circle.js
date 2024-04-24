class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius() {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor() {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage
  let myCircle = new Circle(1.0, "red");
  console.log(myCircle.toString());
  console.log("Area:", myCircle.getArea());
  console.log("Circumference:", myCircle.getCircumference());