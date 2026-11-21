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
// taile type Height er type hcche number
// type Height = AreaOfNum['height']

// Area of number er moddhe mapped kore amra area of string banabo

/* 
type AreaOfString = {
    height: string;
    width: string;
}
*/
// type AreaOfString = {
//     [key in 'height' | 'width'] : string
// }

// type AreaOfBoolean = {
//     [key in 'height' | 'width'] : boolean
// }



type Area <T> = {
    [key in keyof T]: T[key]
}

const area1: Area<{height: string, width: string}> = {
    height: '120',
    width: '123'
}

console.log(area1);

// mapped types

// map

// const arrayOfNum: number[] = [1, 4, 6];

const arrayOfstring: string[] = ["1", "4", "6"];

// const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

const user = {
  id: 222,
};

// type AreaOfNum = {
//   height: number;
//   width: number;
// };

type height = AreaOfNum["height"];

// type AreaOfString = {
//  height: string;
//   width: string;
// };

// type Area<T> = {
//   [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number
// };

/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/

//"height" |"width"

// const area1: Area<{ height: string; width: boolean }> = {
//   height: "50",
//   width: false,
// };
