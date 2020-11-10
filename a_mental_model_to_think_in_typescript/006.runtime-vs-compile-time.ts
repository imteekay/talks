/*
Basically, the runtime is the execution time of a program.
Imagine your backend receiving data from a frontend form page,
handling this data, and saving it. Or when your frontend is
requesting data from a server to render a list of Pokemons products.

Compile time is basically when the compiler is executing operations in
the source code to satisfy the programming language requirements.
It can include type checking as an operation for example.
*/

function getIndexOf(str, part) {
  return str.indexOf(part);
}

getIndexOf('TypeScript', 'Script'); // 4
getIndexOf(42, 'Script'); // Uncaught TypeError: language.indexOf is not a function at getIndexOf

function getIndexOfWithTypes(language: string, part: string): number {
  return language.indexOf(part);
}

getIndexOfWithTypes('TypeScript', 'script'); // 4
getIndexOfWithTypes(42, 'script'); // Argument of type '42' is not assignable to parameter of type 'string'.

// -----------------------------------------------

// Another example

type CreditCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  securityCode: number;
};

type DebitCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  securityCode: number;
};

type PaymentMethod = CreditCard | DebitCard;

const purchase = (paymentMethod: PaymentMethod) => {
  if (paymentMethod instanceof CreditCard) {
    // purchase with credit card
  } else {
    // purchase with debit card
  }
}
