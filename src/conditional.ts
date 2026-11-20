// conditional type :  je type condition er upor nirvorsheel

type A = null;
type B = undefined;

// type C = A extends B ? true : B extends undefined ? true : false

type RichPeopleVehicle = {
    bike: string;
    car: string
}


type Vehicle <T> = T extends keyof RichPeopleVehicle ? true : false

type HasBike = Vehicle<'car'>



// type RichPeopleVehicle = {
//     bike: string;
//     car: string;
// }

// type OtherRichVehicle  = RichPeopleVehicle & {
//     plane: string
// }

// interface RichPeopleVehicle  {
//     bike: string;
//     car: string;
//     ship: string
// }






// interface OtherRichVehicle  extends RichPeopleVehicle {
//     plane: string
// }

// const richVehicle : OtherRichVehicle = {
//     bike: 'Yamaha',
//     car: "X",
//     plane: "KINGFISHER"
// }