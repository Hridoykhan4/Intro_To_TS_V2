const createArrayWithString = (value: string) => [value]
const createArrayWithNumber = (value: number) => [value]

const createArrayWithObj = (value: {id: number, name: string}) => [value]

// createArrayWithObj({id: 101, name: 'Jamal'})

const createArrayWithGeneric = <T> (value: T) => [value]

const arrString = createArrayWithGeneric('Apple')
const arrObj = createArrayWithGeneric({
    name: 'jamal'
})

// tuple

const createArrayWithTuple = (param1: string, param2: {id: number; name: string}) => [param1, param2]

const createArrayTupleWithGeneric = <X, Y> (params1: X, params2: Y)  => [params1, params2]

// const res1 = createArrayWithTuple('Jamal', {id: 101, name: 'Jongol Solimpur'})
// const res2 = createArrayTupleWithGeneric('Jamal', {name: "Mezba"})

const addStudentToCourse = <T> (studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const result = addStudentToCourse(12)
console.log(result);