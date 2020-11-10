// any vs void
function saveMyStringV1(value: string): any {
  sessionStorage.myString = value;
}

function saveMyStringV2(value: string): void {
  sessionStorage.myString = value;
}

function saveMyStringV3(value: string) {
  sessionStorage.myString = value;
}

// --------------------------------------

// type inference: simple values
const num1: number = 1;
const num2 = 1;

// --------------------------------------

// type inference: simple values as function returning type
function sumV1(a: number, b: number): number {
  return a + b;
};

function sumV2(a: number, b: number) {
  return a + b;
};

// --------------------------------------

// type inference: array as function returning type
function squareAllV1(numbers: number[]): number[] {
  return numbers.map(number => number * number);
};

function squareAllV2(numbers: number[]) {
  return numbers.map(number => number * number);
};

// --------------------------------------

// type inference: objects
const personV1: { name: string, age: number } = {
  name: 'TK',
  age: 24
};

const personV2 = {
  name: 'TK',
  age: 24
};

// --------------------------------------

// Using enums to give more semantics
enum MediaTypes {
  JSON = 'application/json',
  PDF = 'application/pdf'
}

fetch('/pokemons', {
  headers: {
    Accept: MediaTypes.JSON
  }
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: MediaTypes.JSON
  }
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: MediaTypes.PDF
  }
});