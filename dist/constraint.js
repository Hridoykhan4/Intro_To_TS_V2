// Constraint: Strict rule dewa
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level", ...studentInfo
    };
};
const student1 = {
    id: 123,
    name: "Mezba",
    hasPen: true,
};
const student2 = {
    id: 321,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true,
};
const student3 = {
    id: 444,
    name: "Abdur Rakib",
    hasWatch: true,
    dateOfBirth: "20-20-2020",
    class: "1",
};
const result = addStudentToCourse(student3);
export {};
