"use strict";
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest";
    }
};
const chowdhuryShaheb = {
    id: "101",
    designation: "JR",
    name: "Salam",
    phoneNo: "015221555",
    teamSize: 12,
};
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
    addBalance(value) {
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
const throwErr = (msg) => {
    throw new Error(msg);
};
