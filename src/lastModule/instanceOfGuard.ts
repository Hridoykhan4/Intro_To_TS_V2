//oop : instance of type guard/ type narrowing
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}

class Student extends Person {
    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} hour study kore`);
    }
}

class Teacher extends Person {

  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}


// Function Guard

const isStudent = (user: Person) => {
    return user instanceof Student //user is Student
}

const isTeacher = (user : Person) => {
    return user instanceof Teacher
}

const student1 = new Student('Mr. Student')
const teacher1 = new Teacher('Mr. Teacher')
const person1 = new Person('Mr. Person')
console.log(student1 instanceof Student);