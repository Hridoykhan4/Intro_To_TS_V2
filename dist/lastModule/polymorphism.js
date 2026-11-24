// polymorphism : bohurupi
class Person {
    getSleep() {
        console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
    }
}
class Student extends Person {
    getSleep() {
        console.log(`I am a student. I sleep  7 hours`);
    }
}
class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a Next Level developer . I sleep for 6 hours`);
    }
}
const getSleep = (param) => {
    param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
// getSleep(person3)
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getArea = (param) => {
    console.log(param.getArea());
};
const shape1 = new Shape();
const shape2 = new Circle(3);
const shape3 = new Rectangle(3, 5);
getArea(shape3);
export {};
