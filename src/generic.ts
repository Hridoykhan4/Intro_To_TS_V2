//  Dynamically generalize: Generic

// type GenericArray<T> = T

// const arr : GenericArray<string> =  '12'

type GenericArray<T> = Array<T>

const arr : GenericArray<string> =  ['Jamal', 'Salam', 'Kalam']

const friends2 : GenericArray<number> = [1,2]


type User = { name: string; age: number }; 

const userList : GenericArray<User> = [
    {
        name: 'Jamal',
        age: 21
    }
]

// !! Important

type Coordinates<X, Y> = [X, Y] 

const co1: Coordinates<number, string> =  [12, "Jamal"]
