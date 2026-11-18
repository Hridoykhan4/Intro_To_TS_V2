// let anything : any;

// anything = 222;

// console.log((anything as number).toFixed(2));


// const kgToGMConverted = (input: string | number) => {
//     if(typeof input === 'string') {
//         const [value] = input.split(' ');
//         return `Convert ${Number(value) * 1000}`
//     }
//     else{
//         return input * 1000
//     }
// }

// const result1 = kgToGMConverted(2) as number;
// const result2 = kgToGMConverted('2 kg') as string 
// console.log({result1, result2});

type CustomError = {
    message: string
}

try{
    
}

catch(err) {
    console.log((err as CustomError).message);
}