let value;

const add = arg1 => arg2 => arg1 + arg2;

const increment = (num) => num + 1;
value = increment(2); // 3
console.log(value);

const add60 = (num) => num + 60;
value = add60(100); // 160
console.log(value);
