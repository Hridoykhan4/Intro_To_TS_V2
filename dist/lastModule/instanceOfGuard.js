//oop : instance of type guard/ type narrowing
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getSleep(numOfhours) {
        console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
    }
}
class Student extends Person {
    doStudy(numOfHours) {
        console.log(`${this.name} doinik ${numOfHours} hour study kore`);
    }
}
class Teacher extends Person {
    takeClass(numOfhours) {
        console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
    }
}
// Function Guard
const isStudent = (user) => {
    return user instanceof Student; //user is Student
};
const isTeacher = (user) => {
    return user instanceof Teacher;
};
const student1 = new Student('Mr. Student');
const teacher1 = new Teacher('Mr. Teacher');
const person1 = new Person('Mr. Person');
console.log(student1 instanceof Student);
export {};
