const a = 3;
const b = 1;

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleSum = (a, b) => sum(a, b) * 2;
const doubleSubtraction = (a, b) => subtraction(a, b) * 2;

const doubleOperator = (f, a, b) => f(a, b) * 2;

doubleOperator(sum, a, b);
doubleOperator(subtraction, a, b);

const doubleOperator = (f) => (a, b) => f(a, b) * 2;

const doubleSum = doubleOperator(sum);
const doubleSubtraction = doubleOperator(subtraction);

doubleSum(a, b);
doubleSubtraction(a, b);
