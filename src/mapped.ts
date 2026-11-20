// type er upor kemne map use kora jay

// map

const arrayOfNum : number[] = [1,4,6]
const arrayOfString : string[]  = ['n', 'x']

const arrayOfStringUsingMap = arrayOfNum.map(s => s.toString())

// console.log(arrayOfStringUsingMap);


type AreaOfNum = {
    height: number;
    width: number
}



// type AreaOfString = {
//     height: string;
//     width: string;
// }

// type Height = number
// type Height = AreaOfNum['height']

// Area of number er moddhe mapped kore amra array of string also arrayofBoolean banabo