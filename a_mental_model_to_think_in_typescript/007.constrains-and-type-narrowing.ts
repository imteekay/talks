const half = (x) => x / 2;

half(null); // 0
half(undefined); // NaN
half(0); // 0
half('0'); // 0
half('TK'); // NaN
half({ username: 'tk' }); // NaN
half([42, 3.14]); // NaN
half((a, b) => a + b); // NaN

const halfInTS = (x: number) => x / 2;

halfInTS(null); // Argument of type 'null' is not assignable to parameter of type 'number'.
halfInTS(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'number'.(
halfInTS(0); // 0
halfInTS('0'); // Argument of type '"0"' is not assignable to parameter of type 'number'.
halfInTS('TK'); // Argument of type '"TK"' is not assignable to parameter of type 'number'.
halfInTS({ username: 'tk' }); // Argument of type '{ username: string; }' is not assignable to parameter of type 'number'.
halfInTS([42, 3.14]); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
halfInTS((a, b) => a + b); // Argument of type '(a: any, b: any) => any' is not assignable to parameter of type 'number'.