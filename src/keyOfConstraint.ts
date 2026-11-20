// keyof : type operator

// type RichPeopleVehicle =  {
//     car: string;
//     bike: string;
//     cng: string
// }

// interface RichPeopleVehicle {
//   car: string;
//   bike: string;
//   cng: string;
// }

// type MyVehicle = "bike" | "car" | "cng";
// type MyVehicle2 = keyof RichPeopleVehicle;

// const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222,
  name: "Mezba",
  address: {
    city: "ctg",
  },
};
// const address = user["address"]["city"];


const getPropertyFromObj = <X>(obj : X, key: keyof X) : X[keyof X]  => obj[key]

const result = getPropertyFromObj(user, 'id')
console.log(result);


// const getPropertyFromObj = <X>(obj: X, key: keyof X) => obj[key]

// const getPropertyFromObj = <X, Y extends keyof X> (items: X[], key: Y) : X[Y][] => {
//     return items.map(i => i[key])
// };

// console.log(getPropertyFromObj([{name: "salam", roll: 12}], 'roll'));


