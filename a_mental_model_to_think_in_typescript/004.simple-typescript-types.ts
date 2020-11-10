function sum(a, b) {
  return a + b;
}

sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // '0string'   WTF!

// -----------------------------------------

function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // Argument of type '"string"' is not assignable to parameter of type 'number'.

// -----------------------------------------

// How to use simple builtin types
const isTypeScript: boolean = true;
const age: number = 24;
const username: string = 'tk';

// -----------------------------------------

const product = {
  title: 'Some product',
  price: 100.00,
};

// { title: string, price: number }
const product: { title: string, price: number } = {
  title: 'Some product',
  price: 100.00,
};

const wrongProduct: { title: string, price: number } = {
  title: 100.00, // Type 'number' is not assignable to type 'string'.
  price: 'Some product', // Type 'string' is not assignable to type 'number'.
};

// -----------------------------------------

// Type aliases: creating your own types
type Product = {
  title: string;
  price: number;
};

const product: Product = {
  title: 'Some product',
  price: 100.00,
};

// -----------------------------------------

// Arrays / Lists
type Products = Product[];
type Products = Array<Product>;

const products: Product[] = [
  {
    title: 'Product 1',
    price: 100.00,
  },
  {
    title: 'Product 2',
    price: 25.00,
  },
  {
    title: 'Product 3',
    price: 300.00,
  }
];

function sumPrices(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
};

sumPrices(products); // 425
sumPrices([]); // 0
sumPrices([{ title: 'Test', willFail: true }]); // Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.