const half = (x) => x / 2;

half(null); // 0
half(undefined); // NaN
half(0); // 0
half('0'); // 0
half('TK'); // NaN
half({ username: 'tk' }); // NaN
half([42, 3.14]); // NaN
half((a, b) => a + b); // NaN

// Narrowing the input type
const halfInTS = (x: number) => x / 2;

halfInTS(null); // Argument of type 'null' is not assignable to parameter of type 'number'.
halfInTS(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'number'.(
halfInTS(0); // 0
halfInTS('0'); // Argument of type '"0"' is not assignable to parameter of type 'number'.
halfInTS('TK'); // Argument of type '"TK"' is not assignable to parameter of type 'number'.
halfInTS({ username: 'tk' }); // Argument of type '{ username: string; }' is not assignable to parameter of type 'number'.
halfInTS([42, 3.14]); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
halfInTS((a, b) => a + b); // Argument of type '(a: any, b: any) => any' is not assignable to parameter of type 'number'.

// Narrowing using typeof
type StringOrNumber = string | number;

function stringOrNumber(value: StringOrNumber) {
  if (typeof value === 'string') {
    // value.
    // your ide will show you the possible methods from the string type
    // (parameter) value: string
    value
  }

  if (typeof value === 'number') {
    // value.
    // your ide will show you the possible methods from the number type
    // (parameter) value: number
    value
  }
}

// ternary or if conditions as type narrowing
type User = {
  name: string;
  address: {
    street: string;
    complement?: string;
  }
};

function getComplementLengthV1(user: User): number {
  return user.address.complement.length;
  // (property) complement?: string | undefined
  // Object is possibly 'undefined'.
}

function getComplementLengthV2(user: User) {
  return user.address.complement?.length;
}

function getComplementLengthV3(user: User): number {
  return user.address.complement
    ? user.address.complement.length
    : 0;
}

function getComplementLengthV4(user: User): number {
  if (!user.address.complement) return 0;
  return user.address.complement.length;
}

getComplementLengthV4({
  name: 'TK',
  address: {
    street: 'Shinjuku Avenue'
  }
}); // 0

getComplementLengthV4({
  name: 'TK',
  address: {
    street: 'Shinjuku Avenue',
    complement: 'A complement'
  }
}); // 12
