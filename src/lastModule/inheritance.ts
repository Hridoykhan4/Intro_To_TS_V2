class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}

class Teacher extends Person {
    takeClass(numOfClass: number) {
        console.log(`${this.name} ${numOfClass} hour class ney`);
    }
}


// class Student extends Person {
//     constructor(name: string, age: number, address: string, public rollNo: number) {
//         super(name, age, address)
//         this.rollNo = rollNo
//     }

// }

const teacher = new Teacher(`Mr. fakibaaz`, 18, "Bangladesh");
teacher.takeClass(12)
// student1.rollNo = 12;
// console.log(student1);