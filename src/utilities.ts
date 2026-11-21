// Utility Types

type Product = {
    id: number;
    name: string;
    price: number;
    color?: string
}

type ProductSummary = Pick<Product, 'id' | 'name'>

// const product : ProductSummary = {
//     id: 101,
//     name: "Jamal"
// }

type ProductWithoutStock = Omit<Product, 'color' | 'price'>

const withoutStock : ProductWithoutStock = {
    id: 120,
    name: "asdas"
}

type ProductWithColor = Required<Product>

const withColor : ProductWithColor =  {
    color: "",
    id: 12,
    name: "aqwqw",
    price: 123
}

type OptionalProduct = Partial<Product>

const optional : OptionalProduct = {
    color: 'asd'
}

const updateProfile = (id: string, data: Partial<Product>) => {
//   data.color = ''
};

updateProfile('212', {})

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
  111: '12'
};

const emptyObj: Record<string, unknown> = {};

type ProductPreview = Pick<Product, "name" | "id">;

type Environment = 'development' | "staging" | "production"

interface IEnvironment {
    development: string;
    staging: string;
    production: string
}

// const apiUrls : IEnvironment = {
//     development: 'asdsad',
//     staging: 'dassdas',
//     production: 'das'
// }


const apiUrls : Record<Environment, string> = {
    development: 'tr',
    production: "sfdsd",
    staging: 'as'
}