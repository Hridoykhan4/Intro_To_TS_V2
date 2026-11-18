interface Developer <T, X = null>{
    name: string;
    salary: number;
    smartWatch : T,
    bike?: X
}




const rickDev : Developer<AppleWatch, null > = {
        name: 'Jamal',
        salary: 12,
        smartWatch: {
            AiFeature: true,
            calculator: true,
            callSupport: true,
            heartRate: '10'
        },
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}


interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

type BikeModel =   { brand: "Yamaha" | "R15"; engineCapacity: "200cc" }


const poorDev: Developer<BrandCharaWatch, BikeModel> = {
  name: "asd",
  salary: 12312,
  smartWatch: {
    heartRate: "10",
    stopwatch: true
  },
  bike: {
    brand: 'R15',
    engineCapacity: '200cc'
  }
};

