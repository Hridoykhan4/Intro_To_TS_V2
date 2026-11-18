//union |
type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest";
  }
};

// console.log(getDashboard('user'));

// intersection

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const chowdhuryShaheb: EmployeeManager = {
  id: "101",
  designation: "JR",
  name: "Salam",
  phoneNo: "015221555",
  teamSize: 12,
};

// type A = {bondhu : "upokari"}
// type B = {sotru: number}
// type AB = A & B;

// const info : AB = {
//     bondhu: 'upokari',
//     sotru: 3
// }

// function fn (input: string | null) : void | null | undefined {

// }

interface IUser {
  name: string;
  age: number;
}

type TUser = {
  name: string;
  age: number;
};

type Tlearner = {
  attitude: "learning";
};

//   type combined = TUser & Tlearner;

interface IUser {
  name: string;
  age: number;
}

interface ILearner extends IUser {
  attitude: string;
  name: string;
}

const user = {
  name: "Toufiq",
  age: 20,
};

const user2 = {
  id: 1,
  ...user,
  address: "Dhaka",
};

const { ...rest } = user2;
// console.log(rest);

const poorUser = {
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};
// let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

// mixedArr.push(true);

// function addItemToArr <T> (arr: T[], item: T) : T[] {
//     arr.push(item);
//     return arr
// }

// let mixedArr : (string | number | boolean)[] =  ['Jamal', 12, 'Salam']

// const updatedArr = addItemToArr<string | number | boolean>(mixedArr, true)

// let coordinates: readonly [number, number, number] = [20, 30, 50];
// coordinates.push(10)



// const discountCalculator = (input: unknown) => {
//      if(typeof input === 'string') {
//         const [value] = input.split(' ')
//         console.log(Number(value));
//     }
//     else if(typeof input === 'number') {
//         console.log(input);
//     }
//     else {
//         console.log('Wrong Input');
//     }
    
// }


// // discountCalculator(100)
// discountCalculator('100 TK')
// // discountCalculator(null)

const throwErr = (msg: string) => {
    throw new Error(msg)
}