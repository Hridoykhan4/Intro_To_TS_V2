class Person {
    name; // common
    age; // common
    address; // common
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOFhours) {
        console.log(`${this.name} ${numOFhours} ghonta ghumai`);
    }
}
class Teacher extends Person {
    takeClass(numOfClass) {
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
teacher.takeClass(12);
export {};
// student1.rollNo = 12;
// console.log(student1);
