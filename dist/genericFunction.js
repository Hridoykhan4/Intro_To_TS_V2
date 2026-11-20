const createArrayWithString = (value) => [value];
const createArrayWithNumber = (value) => [value];
const createArrayWithObj = (value) => [value];
// createArrayWithObj({id: 101, name: 'Jamal'})
const createArrayWithGeneric = (value) => [value];
const arrString = createArrayWithGeneric('Apple');
const arrObj = createArrayWithGeneric({
    name: 'jamal'
});
// tuple
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayTupleWithGeneric = (params1, params2) => [params1, params2];
// const res1 = createArrayWithTuple('Jamal', {id: 101, name: 'Jongol Solimpur'})
// const res2 = createArrayTupleWithGeneric('Jamal', {name: "Mezba"})
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
};
const result = addStudentToCourse(12);
console.log(result);
export {};
