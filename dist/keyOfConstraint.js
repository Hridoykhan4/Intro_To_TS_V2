// keyof : type operator
const user = {
    id: 222,
    name: "Mezba",
    address: {
        city: "ctg",
    },
};
// const address = user["address"]["city"];
const getPropertyFromObj = (obj, key) => obj[key];
const result = getPropertyFromObj(user, 'id');
console.log(result);
export {};
// const getPropertyFromObj = <X>(obj: X, key: keyof X) => obj[key]
// const getPropertyFromObj = <X, Y extends keyof X> (items: X[], key: Y) : X[Y][] => {
//     return items.map(i => i[key])
// };
// console.log(getPropertyFromObj([{name: "salam", roll: 12}], 'roll'));
