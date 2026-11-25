const addStudentToCourse = (studentInfo) => ({
    course: "CBDL",
    ...studentInfo
});
console.log(addStudentToCourse({ name: "Ss" }));
export {};
