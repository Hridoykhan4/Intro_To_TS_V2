// type er upor kemne map use kora jay
// map
const arrayOfNum = [1, 4, 6];
const arrayOfString = ['n', 'x'];
const arrayOfStringUsingMap = arrayOfNum.map(s => s.toString());
const area1 = {
    height: '120',
    width: '123'
};
console.log(area1);
// mapped types
// map
// const arrayOfNum: number[] = [1, 4, 6];
const arrayOfstring = ["1", "4", "6"];
// const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
const user = {
    id: 222,
};
export {};
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
