/* 
amra kono property / method k jodi static kori, ekTa memory location thekei value Ta reference korte parbo 
*/

class Counter {
    static count : number = 0  //ekTa memory kei reference kore, 
    // initialize kroate constructor lagbe na

    static increment () {
        return (Counter.count = Counter.count + 1)
    }

    //   decrement () {
    //     return (this.count = this.count - 1)
    // }
     static decrement () {
        return (Counter.count = Counter.count - 1)
    }
}


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.decrement());
console.log(Counter.increment());


/* 
    amar jotw instance hobe shobai jeno same memory theke data niye data k modify korte pare...
*/

// const instance1 = new Counter(); // ekta memory
// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter(); // rekta different
// console.log(instance2.increment()); //1
// console.log(instance2.increment()); // 2