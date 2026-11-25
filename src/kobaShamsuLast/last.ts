const addStudentToCourse = <T extends Record<string, unknown>> (studentInfo: T) => ({
    course: "CBDL",
    ...studentInfo
})

console.log(addStudentToCourse({name: "Ss"}));