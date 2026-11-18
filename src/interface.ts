type User = {
    name: string;
    age: number
}

type Role =  {
    role: "admin" | 'user'
}

// type UserWithRole = User 

// const user12 : UserWithRole = {
//     // role: 'admin',
//     age: 12,
//     name: 'sas'
// }


// type UserWithRole = User & Role;

// interface IUserWithRole  {
//     role: 'admin' | 'user'
// }

// interface IUserWithRole2  extends User{
//     gender: 'male' | 'female'
// }

// const user1 : IUserWithRole & User = {
//     age: 12,
//     name: 'Jamal',
//     role: 'admin'
// }

// console.log(user1);

type IsAdmin = boolean;

const isAdmin : IsAdmin = true

// FUNCTION

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number) : number
}

// const add : Add = (num1, num2) => num1 + num2;

type Friends = string[]

interface IFriends {
    [index: number] : string
}

const friends : IFriends = ['x', 'y']


type Vehicle = {
    brand: string
}
type Car = Vehicle & {
    model: string
}