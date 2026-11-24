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
const getUserInfo = (user) => {
    if (isStudent(user)) {
        user.doStudy(10);
    }
    else if (isTeacher(user)) {
        user.takeClass(5);
    }
    else {
        user.getSleep(15);
    }
};
const student1 = new Student('Mr. Student');
const teacher1 = new Teacher('Mr. Teacher');
const person1 = new Person('Mr. Person');
getUserInfo(teacher1);
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
console.log(pluckValues([{ name: "Rahim", roll: 12 }], 'name'));
export {};
