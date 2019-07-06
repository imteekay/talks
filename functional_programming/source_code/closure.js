let value;

const add = (arg1, arg2) => (arg2) => arg1 + arg2;

const increment = add(1); // => (arg2) => 1 + arg2
value = increment(2); // 3
console.log(value);

const add60 = add(60);
value = add60(100); // 160
console.log(value);
