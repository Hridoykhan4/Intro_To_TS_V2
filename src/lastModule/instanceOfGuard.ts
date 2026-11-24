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


const getUserInfo = (user: Person) => {
    if(isStudent(user)) {
        user.doStudy(10)
    } else if (isTeacher(user)) {
        user.takeClass(5)
    }
    else {
        user.getSleep(15)
    }
}

const student1 = new Student('Mr. Student')
const teacher1 = new Teacher('Mr. Teacher')
const person1 = new Person('Mr. Person')



getUserInfo(teacher1)

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}


console.log(pluckValues([{name: "Rahim", roll: 12}], 'name'));